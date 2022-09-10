import React from 'react';
import CenteredGridWithHeading from "../GridSectionLayout/centeredGridWithHeading";
import IconTitleDescriptionActionCard from "../../organisms/cards/IconTitleDescriptionActionCard/base"

let sectionDetails = {
  title: "Stats that matter",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}

const items = [
  {
    title: '7000+',
    description: 'Investors using platform',
  },
  {
    title: '45 Years+',
    description: 'of real estate experience',
  },
  {
    title: '100 Cr+',
    description: 'worth of transactions',
  },
  {
    title: '800+',
    description: 'Investment options',
  },
]

const SectionsExampleOne = () => {
  return (
    <div>
      <CenteredGridWithHeading
        headingSection={<Heading />}
        sectionContentData={items}
        itemsRenderer={ItemRendererComponent} // should be an object and not <Component />
        centeredGridBaseClasses={{
          gridClasses: "space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-x-8 sm:gap-y-10"
        }}
      />
    </div>
  )
}


const Heading = () => {
  return (
    <IconTitleDescriptionActionCard
      title={sectionDetails.title}
      description={sectionDetails.description}
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
              titleWrapper: "text-center",
              titleStyles: "order-1 text-2xl font-extrabold text-blue-900",
              descriptionWrapper: "text-center",
              descriptionStyles: "order-2 mt-2 text-sm leading-6 text-gray-500"
            }}
          />
        );
      })}
    </>
  );
}

export default SectionsExampleOne;