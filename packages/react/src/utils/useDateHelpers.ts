import React, { useRef, useEffect } from "react";
import { DateTime } from "ts-luxon";

const convertGMTDateToTimezone = (
  date: any,
  format = "MMM dd, yyyy, hh:mm a"
) => {
  if (typeof date === "string") {
    let dateTime = DateTime.fromISO(date, { zone: "local" }).toFormat(format);
    return dateTime;
  } else {
    let dateTime = DateTime.fromJSDate(date, { zone: "local" }).toFormat(
      format
    );
    return dateTime;
  }
};

function useDateHelpers() {
  const getFormattedDate = (
    date: any,
    timestamp = false,
    format = "MMM dd, yyyy, hh:mm a"
  ) => {
    console.log("DATE_VALUE", date);
    if (timestamp) {
      date = new Date(date * 1000).toISOString();
    }

    return convertGMTDateToTimezone(date, format);
  };

  return {
    getFormattedDate,
  };
}

export { useDateHelpers };
