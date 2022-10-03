import React, { useState } from "react";
import DateInput from "./dateInput";

export default function DateInputExample() {
  const [dateVal, setDateVal] = useState(new Date());
  return (
    <div className="w-full">
      <DateInput
        defaultValue={dateVal}
        onChange={(val: any) => {
          console.log("change_date_123");
          setDateVal(val);
        }}
      />
    </div>
  );
}
