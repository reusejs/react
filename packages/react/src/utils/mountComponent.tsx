import React from "react";
import { createRoot } from "react-dom/client";

const mountComponent = (
  Component: any,
  unmountDelay = 1000,
  mountingNode?: any
) => {
  console.log("mountComponent", unmountDelay, mountingNode);

  return (props: any) => {
    let wrapper: any;

    if (mountingNode === undefined) {
      wrapper = document.body.appendChild(document.createElement("div"));
    } else {
      if (document !== null && document !== undefined) {
        let existingNode = document.getElementById(mountingNode);
        if (existingNode !== null) {
          wrapper = existingNode.appendChild(document.createElement("div"));
        }
      }
    }

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

export default mountComponent;
