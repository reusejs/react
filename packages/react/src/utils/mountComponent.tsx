import React from "react";
import { createRoot } from "react-dom/client";

const createConfirmation = (
  Component: any,
  unmountDelay = 1000,
  mountingNode = document.body
) => {
  return (props: any) => {
    const wrapper = mountingNode.appendChild(document.createElement("div"));
    const root = createRoot(wrapper);

    const promise = new Promise((resolve, reject) => {
      try {
        root.render(
          <Component
            reject={reject}
            resolve={resolve}
            dispose={dispose}
            {...props}
          />
        );
      } catch (e) {
        throw e;
      }
    });

    function dispose() {
      setTimeout(() => {
        root.unmount();
        setTimeout(() => {
          if (wrapper && wrapper.parentNode) {
            wrapper.parentNode.removeChild(wrapper);
          }
        });
      }, unmountDelay);
    }

    return promise.then(
      (result) => {
        dispose();
        return result;
      },
      (result) => {
        dispose();
        return Promise.reject(result);
      }
    );
  };
};

export default createConfirmation;
