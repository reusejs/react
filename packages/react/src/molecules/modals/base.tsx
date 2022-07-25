import { CheckIcon } from "@heroicons/react/solid";
import React, { useRef } from "react";
import "../../../tailwind.css";
import ButtonBase from "../../atoms/buttons/base.js";
import theme from "../../theme/theme.js";
import Closable from "../../utils/closable";
import mountComponent from "../../utils/mountComponent.js";
import ModalWrapper from "./wrapper";
import useOutsideClicker from "../../hooks/useOutsideClicker";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface ModalBaseProps {
  visible?: any;
  onAction?: any;
  content?: any;
  backgroundColor?: string;
  opacity ?: string;
  modalBaseClasses ?: {
    background?: string,
    font?: string,
    border?: string,
    padding?: string,
    alignment?: string,
    shadow?: string, 
  }
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
    ],
    props,
    theme
  );

  return (
    <ModalWrapper showModal={props.visible} resolveModal={props.onAction} backgroundColor={props.backgroundColor} opacity={props.opacity}>
      <div
        className={"relative transform overflow-hidden transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 " + modalClassNames}
        ref={visRef}
      >
        {props.content && (
          <props.content visible={props.visible} onAction={props.onAction} />
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
