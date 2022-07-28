import { useState } from "react";

import isEmpty from "lodash/isEmpty";
import indexOf from "lodash/indexOf";
import keys from "lodash/keys";
import flatten from "lodash/flatten";
import toArray from "lodash/toArray";
import difference from "lodash/difference";

export default () => {
  const [errors, setErrors] = useState<any>({});

  return {
    errors,
    setErrors,
    hasErrors: () => {
      return !isEmpty(errors);
    },
    has: (field: any) => {
      return indexOf(keys(errors), field) > -1;
    },
    all: () => {
      return errors;
    },
    flatten: () => {
      return flatten(toArray(errors));
    },
    get: (field: any) => {
      if (indexOf(keys(errors), field) > -1) {
        return errors[field];
      }
    },
    set: (data: any) => {
      if (typeof data === "object") {
        setErrors(data);
      } else {
        setErrors({
          form: "Something went wrong. Please try again or contact customer support.",
        });
      }
    },
    push: (data: any) => {
      if (typeof data === "object") {
        setErrors({ ...errors, ...data });
      } else {
        setErrors({
          form: "Something went wrong. Please try again or contact customer support.",
        });
      }
    },
    forget: () => {
      setErrors({});
    },
    popError: (error: any) => {
      if (indexOf(keys(errors), error) > -1) {
        let unresolvedErrors = difference(errors, error);
        setErrors(unresolvedErrors);
        return;
      }
    },
  };
};
