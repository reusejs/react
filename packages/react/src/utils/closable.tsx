import React, { useState, useEffect } from "react";

const Closable =
  (Component: any) =>
  ({ ...props }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      if (props.timeout !== 0) {
        setTimeout(() => {
          onAction(true);
        }, props.timeout || 3000);
      }
    });

    const onAction = (value: any) => {
      setVisible(false);
      props.resolve(value);
    };

    return <Component onAction={onAction} visible={visible} {...props} />;
  };

export default Closable;
