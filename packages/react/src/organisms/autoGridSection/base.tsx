import React, { useState, useEffect } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import classNames from "../../utils/classNames";

export interface AutoGridSectionProps {
  gridConfig?: any;
  gridEl?: any;
  //   title?: any;
  //   subTitle?: any;
  //   actions?: any;
  //   horizontalPadding?: string;
  //   verticalPadding?: string;
  backgroundClasses?: string;
  widthClasses?: string;
  // children?: any;
}

const AutoGridSection = (props: AutoGridSectionProps) => {
  const backgroundClasses = props.backgroundClasses || "bg-gray-50";
  const widthClasses =
    props.widthClasses ||
    "mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8";

  const [numberofColumns, setNumberofColumns] = useState(0);
  const [numberofRows, setNumberofRows] = useState(0);

  useEffect(() => {
    setNumberofColumns(props.gridConfig.length);
    setNumberofRows(props.gridConfig);
  }, [props.gridConfig.length]);

  console.log("==========log values========", numberofColumns, numberofRows);

  return (
    <>
      <h1>Grid</h1>

      {`${props.gridConfig.length} x ${props.gridConfig[0].length}`}

      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "yellow",
          }}
        >
          {props.gridConfig.map((column?: any, colIndex?: any) => {
            return (
              <div>
                {props.gridConfig[colIndex].map((row?: any, rowIndex?: any) => {
                  console.log("InnerLoop", colIndex, rowIndex);
                  return (
                    <div id="abc">
                      <div>{props.gridConfig[colIndex][rowIndex]}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        <h3>STATIC GRID</h3>
        <div className={`grid grid-cols-4`}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>

        <h3>DYNAMIC GRID</h3>

        {/* <div className={`grid grid-cols-${props.gridConfig.length}`}> */}
        <div className={`grid grid-cols-3`}>
          {props.gridConfig.map((column?: any, colIndex?: any) => {
            return <div>H!-{colIndex}</div>;
            // return (
            //   <div
            //     className={`grid-row-${props.gridConfig[colIndex].length} grid`}
            //   >
            //     {props.gridConfig[colIndex].map((row?: any, rowIndex?: any) => {
            //       return (
            //         <div id="abc2">
            //           <div>{props.gridConfig[colIndex][rowIndex]}</div>
            //         </div>
            //       );
            //     })}
            //   </div>
            // );
          })}
        </div>
      </div>
    </>
  );
};

export default AutoGridSection;
