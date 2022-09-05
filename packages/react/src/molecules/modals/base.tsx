import React, { useRef } from "react";
import "../../../tailwind.css";
import useOutsideClicker from "../../hooks/useOutsideClicker";
import theme from "../../theme/theme.js";
import Closable from "../../utils/closable";
import mountComponent from "../../utils/mountComponent.js";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import ModalWrapper from "./wrapper";

export interface ModalBaseProps {
  visible?: any;
  onAction?: any;
  content?: any;
  backgroundColor?: string;
  backgroundOpacity?: string;
  modalBaseClasses?: {
    background?: string;
    font?: string;
    border?: string;
    padding?: string;
    alignment?: string;
    shadow?: string;
    small?: string;
    animation?: string;
  };
  contentProps?: any;
}

const ModalBase = (props: ModalBaseProps) => {
  const cancelButtonRef = useRef(null);

  const visRef = useOutsideClicker(() => {
    props.onAction(false);
  });

  const modalClassNames = resolvedStyleProps(
    "modalBaseClasses",
    [
      "background",
      "font",
      "border",
      "padding",
      "alignment",
      "shadow",
      "small",
      "animation",
    ],
    props,
    theme
  );

  return (
    <ModalWrapper
      showModal={props.visible}
      resolveModal={props.onAction}
      backgroundColor={props.backgroundColor}
      backgroundOpacity={props.backgroundOpacity}
    >
      <div className={modalClassNames} ref={visRef}>
        {props.content && (
          <props.content
            visible={props.visible}
            onAction={props.onAction}
            {...props.contentProps}
          />
        )}
      </div>
    </ModalWrapper>
  );
};

export const canBeClosed = mountComponent(Closable(ModalBase), 1000);

function Exportable(config: any, options = {}) {
  config.timeout = 0;
  return canBeClosed({ ...config, ...options });
}

export default Exportable;
