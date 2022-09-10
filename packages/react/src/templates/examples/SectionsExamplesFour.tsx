import React from 'react';
import CenteredGridWithHeading from "../GridSectionLayout/centeredGridWithHeading";
import IconTitleDescriptionActionCard from "../../organisms/cards/IconTitleDescriptionActionCard/base"

let sectionDetails = {
  title: "Need Help",
}

const items = [
  {
    title: 'Expert Consultation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Financing Assistance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Dedicated Relationship Managers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

const SectionsExampleThree = () => {

  return (
    <div>
      <CenteredGridWithHeading
        headingSection={<Heading />}
        sectionContentData={items}
        itemsRenderer={ItemRendererComponent} // should be an object
        centeredGridBaseClasses={{
          gridClasses: "sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-x-8 sm:gap-y-10"
        }}
      />
    </div>
  )
}

const Heading = () => {
  return (
    <IconTitleDescriptionActionCard
      title={sectionDetails.title}
      // description={sectionDetails.description}
      itemTitleDescriptionCardBaseClasses={{
        titleWrapper: "text-center",
        titleStyles: "text-3xl font-extrabold text-blue-900 sm:text-4xl",
        descriptionWrapper: "text-center",
        descriptionStyles: "mt-3 text-lg sm:mt-4 text-gray-500"
      }}
    />
  )
}

const ItemRendererComponent = (props?: any) => {
  return (
    <>
      {props.items.map((item?: any, index?: number) => {
        return (
          <IconTitleDescriptionActionCard
            key={index}
            title={item.title}
            icon={item.icon}
            description={item.description}
            itemTitleDescriptionCardBaseClasses={{
              titleWrapper: "text-left",
              titleStyles: "order-1 text-2xl font-extrabold text-blue-900",
              descriptionWrapper: "text-left",
              descriptionStyles: "order-2 mt-2 text-base leading-6"
            }}
          />
        );
      })}
    </>
  );
}



export default SectionsExampleThree;