import React from 'react';
import CenteredGridWithHeading from "../GridSectionLayout/centeredGridWithHeading";
import IconTitleDescriptionActionCard from "../../organisms/cards/IconTitleDescriptionActionCard/base"
import SectionContainer from "../../organisms/sectionContainer/base";
import TwoColumnSectionBase from "../Layouts/TwoSectionLayout/base";

/*
  - create left section
  - create right section
  - render side by side
  - make it responsive
  - work on the explore section
*/

const Actions = () => {
  return (
    <a
      href='#'
      className='inline-flex rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
    >
      Explore
    </a>
  );
};

let leftSectionHeading = {
  title: "Explore auction properties",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

let leftSectionItems = [
  {
    title: "Residential assets",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    actions: <Actions />,
  },
  {
    title: "Commercial assets",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    actions: <Actions />,
  },
  {
    title: "Movable assets",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    actions: <Actions />,
  },

]



const Heading = () => {
  return (
    <IconTitleDescriptionActionCard
      title={leftSectionHeading.title}
      description={leftSectionHeading.description}
      itemTitleDescriptionCardBaseClasses={{
        titleWrapper: "text-left",
        titleStyles: "text-3xl font-extrabold sm:text-4xl",
        descriptionWrapper: "text-left",
        descriptionStyles: "mt-3 text-lg sm:mt-4 text-gray-500"
      }}
    />
  )
}

const Footer = (props: any) => {
  return (
    <div className="mt-4">
      <p className="text-sm italic text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
    </div>
  )
}

const LeftSection = (props: any) => {
  return (
    <CenteredGridWithHeading
      headingSection={<Heading />}
      footerSection={<Footer />}
      sectionContentData={leftSectionItems}
      itemsRenderer={ItemRendererComponent} // should be an object and not <Component />
      centeredGridBaseClasses={{
        gridClasses: "space-y-10 sm:space-y-0 xs:grid xs:grid-cols-1 xs:gap-x-8 xs:gap-y-10 py-2",
        gridWrapper: "mt-4 border-b-2 border-t-2"
      }}
    />
  )
}

const RightSection = (props: any) => {
  return (
    <div className="flex bg-yellow-300 items-center justify-between">
      <h1>RIGHT SECTION</h1>
    </div>
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
            iconPosition='top-center'
            itemTitleDescriptionCardBaseClasses={{
              wrapper: "relative pl-4 py-4 bg-white hover:bg-gray-100 border-l-4 border-transparent hover:border-l-4 hover:border-blue-600",
              titleWrapper: 'mt-2',
              titleStyles: "text-lg leading-6 font-medium text-gray-900",
              descriptionWrapper: "mt-2",
              descriptionStyles: "text-base text-gray-500",
              actionWrapper: 'mt-2',
            }}
          />
        );
      })}
    </>
  );
}



const SectionsExampleThree = () => {

  return (
    <SectionContainer>
      <TwoColumnSectionBase
        firstColumnEl={<LeftSection />}
        secondColumnEl={<RightSection />}
        twoColumnSectionBaseClasses={{
          firstElWrapperStyles:"w-1/2",
          secondElWrapperStyles:"w-1/2",
        }}
      />
    </SectionContainer>
  )
}


export default SectionsExampleThree;