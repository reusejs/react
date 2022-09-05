import React, { useState, useEffect } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import classNames from "../../utils/classNames";

export interface TwoColumnGrid {
  numberOfColumns?: any;
  numberOfRows?: any;
  contents?: any;
}

export interface GridGenerator {
  gridClasses?: string;
  contents?: any;
}

const GridGenerator = (props: GridGenerator) => {
  return (
    <>
      <h3>GRID2...</h3>
      <div className={`${props.gridClasses}`}>
        {props.contents.map((el?: any, index?: number) => {
          return <div>{el}</div>;
        })}
      </div>
    </>
  );
};

const TwoColumnGridExampleOne = () => {
  const contents = [["IMAGE"], ["InfoComponent"]];

  return (
    <GridGenerator
      gridClasses="grid grid-cols-1 md:grid-cols-2"
      contents={contents}
    />
  );
};

export default TwoColumnGridExampleOne;
