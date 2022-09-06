import React from "react";

export interface CenteredGridInterface {
  sectionHeading?: any;
  sectionDescription?: any;
  sectionContentData?: any;
  gridColumnClasses?: string;
  textAlignmentClasses?: string;
}

const CenteredGrid = (props: CenteredGridInterface) => {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={props.textAlignmentClasses}>
          {props.sectionHeading}

          {props.sectionDescription ? props.sectionDescription : null}
        </div>

        <div className="mt-10">
          <dl className={props.gridColumnClasses}>
            {props.sectionContentData.map((el: any, index: any) => {
              console.log("render section data");
              return <span key={index}>{el}</span>;
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

CenteredGrid.defaultProps = {
  gridColumnClasses:
    "space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0",
  textAlignmentClasses: "lg:text-center",
};

export default CenteredGrid;
