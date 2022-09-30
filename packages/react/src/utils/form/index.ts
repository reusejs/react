import { useState } from "react";
import useBetaErrors from "./errors.ts";
import validate from "validate.js";
import result from "lodash/result";

function resolve(path: string, obj: any) {
  return path.split(".").reduce(function (prev, curr) {
    return prev ? prev[curr] : null;
  }, obj);
}

function setByDot(obj: any, path: string, val: any) {
  path.split(".").reduce(function (prev, curr, _idx, _arr) {
    if (_idx === _arr.length - 1 && prev) {
      prev[curr] = val;
    }

    return prev ? prev[curr] : null;
  }, obj);

  return obj;
}

export default function (initial: any) {
  const [value, setValue] = useState<any>(initial);
  const [rules, setRules] = useState<any>({});
  const [busy, setBusy] = useState<any>(false);
  const [successful, setSuccessful] = useState<any>(false);
  const errors = useBetaErrors();

  return {
    value,
    setValue,
    errors,
    busy,
    setValidationRules: (v: any) => {
      setRules(v);
    },
    validate: () => {
      setBusy(true);
      let validateJsErrors = validate(value, rules);

      if (validateJsErrors === undefined) {
        errors.set({});
      } else {
        errors.set(validateJsErrors);
      }
      setBusy(false);
      return validateJsErrors === undefined ? true : false;
    },
    validateSingleField: (v: any, key: any) => {
      setBusy(true);

      let fieldRules = result(rules, key);

      let validateJsErrorsForField = validate.single(v, fieldRules);
      if (validateJsErrorsForField === undefined) {
        errors.popError(key);
      } else {
        errors.push({
          [key]: validateJsErrorsForField,
        });
      }
      setBusy(false);
      return validateJsErrorsForField === undefined ? true : false;
    },
    setField: (k: any, v: any) =>
      setValue((s: any) => {
        s = setByDot(s, k, v);
        s = s;
        return { ...s };
      }),
    startProcessing: () => {
      errors.forget();
      setBusy(true);
      setSuccessful(false);
    },
    finishProcessing: () => {
      setBusy(false);
      setSuccessful(true);
    },
    resetStatus: () => {
      errors.forget();
      setBusy(false);
      setSuccessful(false);
    },
    setErrors: (data: any) => {
      // console.log("data", data);
      errors.set(data);
      setBusy(false);
    },
    pushError: (data: any) => {
      errors.push(data);
      setBusy(false);
    },
    forgetErrors: (data: any) => {
      errors.set({});
      setBusy(false);
    },
    removeError: (data: any) => {
      errors.popError(data);
      setBusy(false);
    },
    getField: (field: any) => {
      return resolve(field, value);
    },
  };
}
