import { CheckIcon } from "@heroicons/react/solid";
import React, { useRef } from "react";
import "../../../tailwind.css";
import ButtonBase from "../../atoms/buttons/base.js";
import theme from "../../theme/theme.js";
import Closable from "../../utils/closable";
import mountComponent from "../../utils/mountComponent.js";
import ModalWrapper from "./wrapper";
import useOutsideClicker from "../../hooks/useOutsideClicker";

export interface ModalBaseProps {
  visible?: any;
  onAction?: any;
  content?: any;
}

const ModalBase = (props: ModalBaseProps) => {
  const cancelButtonRef = useRef(null);

  const visRef = useOutsideClicker(() => {
    props.onAction(false);
  });

  return (
    <ModalWrapper showModal={props.visible} resolveModal={props.onAction}>
      <div
        className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
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
