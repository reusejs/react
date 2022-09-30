import { CheckIcon } from "@heroicons/react/solid";
import React, { useRef } from "react";
import "../../../tailwind.css";
import ButtonBase from "../../atoms/buttons/base.tsx";
import theme from "../../theme/theme.ts";
import Closable from "../../utils/closable";
import mountComponent from "../../utils/mountComponent.tsx";
import ModalWrapper from "./wrapper";
import { ModalBaseProps } from "./base";

export interface ModalConfirmProps extends ModalBaseProps {
  yesText?: string;
  noText?: string;
  heading?: string;
  description?: string;
  yesButtonClasses?: any;
}

const ModalConfirm = (props: ModalConfirmProps) => {
  const cancelButtonRef = useRef(null);

  return (
    <ModalWrapper
      showModal={props.visible}
      resolveModal={props.onAction}
      backgroundColor={props.backgroundColor}
      backgroundOpacity={props.backgroundOpacity}
    >
      <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
        {props.content && <props.content />}
        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
          <ButtonBase
            label={props.yesText || "Yes"}
            type="button"
            onClick={() => props.onAction(true)}
            buttonBaseClasses={{
              ...theme.modalConfirmClasses.yesButtonClasses,
              ...props.yesButtonClasses,
            }}
          />
          <ButtonBase
            label={props.noText || "No"}
            type="button"
            onClick={() => props.onAction(false)}
            buttonBaseClasses={theme.modalConfirmClasses.noButtonClasses}
          />
        </div>
      </div>
    </ModalWrapper>
  );
};

// export const canBeClosed = mountComponent(Closable(ModalConfirm), 500);

function Exportable(
  config: ModalConfirmProps,
  unmountDelay = 1000,
  mountingNode?: any
) {
  if (config.timeout === undefined) {
    config.timeout = 0;
  }
  return mountComponent(
    Closable(ModalConfirm),
    unmountDelay,
    mountingNode
  )(config);
}

export default Exportable;
