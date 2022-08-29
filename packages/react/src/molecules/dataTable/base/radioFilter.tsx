import React, { forwardRef, useState } from "react";
import useOutsideClicker from "../../../hooks/useOutsideClicker";
import eventBus from "../../../utils/eventBus";
import PickerSelectSimple from "../../pickers/select/simple";

const SelectFilter = forwardRef(function SelectFilter(
  {
    onChange,
    options,
    selected,
    ...other
  }: {
    onChange: any;
    options: any;
    selected: any;
  },
  ref
) {
  const visRef = useOutsideClicker(() => {
    setIsOn(false);
  });

  const [isOn, setIsOn] = useState(false);
  const [selectedChoices, setSelectedChoices] = useState(selected);

  eventBus.on("clear", () => {
    setSelectedChoices([]);
  });

  const clearFilter = () => {
    setSelectedChoices([]);
    onChange([]);
  };

  const handleOnChange = (value: any) => {
    setSelectedChoices([value]);
    onChange([value]);
  };

  return (
    <>
      <div ref={visRef}>
        <PickerSelectSimple
          enableSearch={true}
          enableClear={false}
          enableClose={false}
          valueKey={"value"}
          multiple={false}
          defaultSelected={selectedChoices}
          dataSource={() => {
            return options;
          }}
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
      </div>
    </>
  );
});

export default SelectFilter;
