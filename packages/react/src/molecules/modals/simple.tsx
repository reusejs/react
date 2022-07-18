import React, { useRef } from "react";
import mountComponent from "../../utils/mountComponent.js";
import Closable from "../../utils/closable";
import "../../../tailwind.css";
import ModalWrapper from "./wrapper";

export interface ModalSimpleProps {
  visible?: any;
  onAction?: any;
  config?: any;
}

function ClosableModal(props: ModalSimpleProps) {
  console.log("ClosableModal props", props);

  return (
    <ModalWrapper showModal={props.visible} resolveModal={props.config}>
      <props.config.modalContent
        showModal={props.visible}
        resolveModal={props.onAction}
        config={props.config}
      />
    </ModalWrapper>
  );
}

export const canBeClosed = mountComponent(Closable(ClosableModal), 1000);

function Exportable(config: any, options = {}) {
  return canBeClosed({ config, options });
}

export default Exportable;
