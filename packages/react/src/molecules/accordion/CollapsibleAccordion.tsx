import React, { useState } from "react";
import "../../../tailwind.css";
import { LabelBaseProps } from "../../atoms/labels/base";
import AccordionBase from "./Base";
import { AccordionBaseProps } from "./Base";

export interface CollapsibleAccordionBaseProps {
  labelBaseProps?: LabelBaseProps;
  accordionList: AccordionBaseProps[];
  accordionSuffix?: any;
  variant?: string;
}

const CollapsibleAccordion = (props: CollapsibleAccordionBaseProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number>();

  return (
    <div>
      {props.accordionList.map?.((item, index) => {
        return (
          <AccordionBase
            key={index}
            {...item}
            onClick={(val: boolean) => {
              if (val) {
                setExpandedIndex(index);
              }
            }}
            isExpanded={expandedIndex === index}
          />
        );
      })}
    </div>
  );
};
export default CollapsibleAccordion;
