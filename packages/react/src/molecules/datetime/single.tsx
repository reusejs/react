import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useDayzed } from "dayzed";
import { DateTime } from "ts-luxon";
import React, { useState, useEffect } from "react";
import classNames from "../../utils/classNames";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

const monthNamesShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export interface SingleDatePickerProps {
  onChange?: any;
  userTimezone?: any;
  selected?: any;
}

export default function SingleDatePicker(props: SingleDatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<any>(null);

  const convertWithTimezone = (date: any) => {
    console.log("date-112233", date);
    const datepickerDate = DateTime.fromJSDate(date);

    const newDate = DateTime.fromObject(
      {
        year: datepickerDate.year,
        month: datepickerDate.month,
        day: datepickerDate.day,
      },
      { zone: props.userTimezone }
    );

    return newDate.toISO();
  };

  useEffect(() => {
    if (props.selected) {
      let today = new Date(props.selected);
      let date = new Date(convertWithTimezone(today) as any);
      setSelectedDate(date);
    }
  }, []);

  const handleOnDateSelected = (date: any, e: React.SyntheticEvent): void => {
    props.onChange(convertWithTimezone(date.date));
    setSelectedDate(date.date);
  };

  let dayzedData = useDayzed({
    date: new Date(),
    maxDate: new Date(),
    selected: selectedDate,
    onDateSelected: handleOnDateSelected,
    showOutsideDays: true,
  });

  return <Calendar {...dayzedData} />;
}

export interface CalenderProps {
  calendars?: any;
  getBackProps?: any;
  getForwardProps?: any;
  getDateProps?: any;
}

const Calendar = (props: CalenderProps) => {
  console.log("calendars-1122", props.calendars);
  const theme: any = useThemeContext();

  const wrapperStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["wrapper"],
    props,
    theme
  );

  const iconStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["leftRightIconStyles"],
    props,
    theme
  );

  const iconBtnStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["iconButtonStyles"],
    props,
    theme
  );

  const weekDaysStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["weekDaysWrapperStyles"],
    props,
    theme
  );

  const monthNameStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["monthNameStyles"],
    props,
    theme
  );

  const calendarHeaderStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["calenderHeaderWrapper"],
    props,
    theme
  );

  const singleCalenderSectionWrapperStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["singleCalenderSectionWrapper"],
    props,
    theme
  );

  const weeksWrapperStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["weeksWrapper"],
    props,
    theme
  );

  const dateButtonDefaultStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["dateButtonsDefaultStyles"],
    props,
    theme
  );

  const dateButtonsSelectableStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["dateButtonsSelectableStyles"],
    props,
    theme
  );

  const dateButtonsUnSelectableStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["dateButtonsUnSelectableStyles"],
    props,
    theme
  );

  const selectedOrTodayStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["selectedOrTodayStyles"],
    props,
    theme
  );

  const selectedTextStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["selectedTextStyles"],
    props,
    theme
  );

  const selectableTextStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["selectableTextStyles"],
    props,
    theme
  );

  const todayButNotSelectedStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["todayButNotSelectedStyles"],
    props,
    theme
  );

  const topLeftBorderStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["topLeftBorderStyles"],
    props,
    theme
  );

  const topRightBorderStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["topRightBorderStyles"],
    props,
    theme
  );

  const bottomLeftBorderStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["bottomLeftBorderStyles"],
    props,
    theme
  );

  const bottomRightBorderStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["bottomRightBorderStyles"],
    props,
    theme
  );

  const timeSectionDefaultStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["timeSectionDefaultClasses"],
    props,
    theme
  );

  const timeSectionSelectedAndTodayStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["timeSectionSelectedAndTodayClasses"],
    props,
    theme
  );

  const timeSectionSelectedAndNotTodayStyles = resolvedStyleProps(
    "calendarBaseClasses",
    ["timeSectionSelectedAndNotTodayClasses"],
    props,
    theme
  );

  return (
    <div className={wrapperStyles}>
      {props.calendars.map((calendar: any) => (
        <div
          className={singleCalenderSectionWrapperStyles}
          key={`${calendar.month}${calendar.year}`}
        >
          <div className={calendarHeaderStyles}>
            <button
              type="button"
              className={iconBtnStyles}
              {...props.getBackProps({ calendars: props.calendars })}
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className={iconStyles} aria-hidden="true" />
            </button>
            <div className={monthNameStyles}>
              {monthNamesShort[calendar.month]} {calendar.year}
            </div>
            <button
              type="button"
              className={iconBtnStyles}
              {...props.getForwardProps({ calendars: props.calendars })}
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className={iconStyles} aria-hidden="true" />
            </button>
          </div>

          <div className={weekDaysStyles}>
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </div>

          <div className={weeksWrapperStyles}>
            {calendar.weeks.map((week: any, weekIndex: any) =>
              week.map((dateObj: any, dayIdx: any) => {
                let key = `${calendar.month}${calendar.year}${weekIndex}${dayIdx}`;

                let {
                  date,
                  selected,
                  selectable,
                  today,
                  prevMonth,
                  nextMonth,
                } = dateObj;
                let isCurrentMonth = !prevMonth && !nextMonth;
                selectable = selectable && isCurrentMonth;

                return (
                  <button
                    type="button"
                    key={key}
                    {...props.getDateProps({ dateObj })}
                    className={classNames(
                      dateButtonDefaultStyles,
                      selectable
                        ? dateButtonsSelectableStyles
                        : dateButtonsUnSelectableStyles,
                      (selected || today) && selectedOrTodayStyles,
                      selected && selectedTextStyles,
                      selectable && selectableTextStyles,
                      // !selectable && "text-gray-400 dark:text-gray-300",
                      today && !selected && todayButNotSelectedStyles,
                      weekIndex === 0 && dayIdx === 0
                        ? topLeftBorderStyles
                        : "",
                      weekIndex === 0 && dayIdx === 6
                        ? topRightBorderStyles
                        : "",
                      weekIndex === calendar.weeks.length - 1 && dayIdx === 0
                        ? bottomLeftBorderStyles
                        : "",
                      weekIndex === calendar.weeks.length - 1 && dayIdx === 6
                        ? bottomRightBorderStyles
                        : ""
                    )}
                    disabled={!selectable}
                  >
                    <time
                      dateTime={date.getDate()}
                      className={classNames(
                        timeSectionDefaultStyles,
                        selected && today && timeSectionSelectedAndTodayStyles,
                        selected &&
                          !today &&
                          timeSectionSelectedAndNotTodayStyles
                      )}
                    >
                      {selectable ? date.getDate() : date.getDate()}
                    </time>
                  </button>
                );
              })
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
