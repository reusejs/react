import React from "react";

export interface CenteredGridInterface {
  sectionHeading?: any;
  sectionDescription?: any;
  sectionContentData?: any;
  gridColumnClasses?: string;
}

const CenteredGrid = (props: CenteredGridInterface) => {
  React.useEffect(() => {
    console.log("props.sectionHeading", props);
    // console.log("props.sectionDescription", props.sectionDescription);
  }, [props]);

  const defaultGridClasses =
    "space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0";

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          {props.sectionHeading}

          {props.sectionDescription}
        </div>

        <div className="mt-10">
          <dl
            className={
              props.gridColumnClasses
                ? `${props.gridColumnClasses}`
                : `${defaultGridClasses}`
            }
          >
            {props.sectionContentData.map((el?: any, index?: any) => {
              return el;
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default CenteredGrid;
