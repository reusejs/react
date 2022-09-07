import React from 'react';
import CenteredGridWithHeading from "../GridSectionLayout/centeredGridWithHeading";
import IconTitleDescriptionActionCard from "../../organisms/cards/IconTitleDescriptionActionCard/base"
import SectionContainerBase from '../../organisms/sectionContainer/base';

let sectionDetails = {
  title: "Services",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}

const Icon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='2'
      stroke='currentColor'
      aria-hidden='true'
      className='h-6 w-6'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
      ></path>
    </svg>
  );
};

const Actions = () => {
  return (
    <a
      href='#'
      className='inline-flex rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
    >
      Get started
    </a>
  );
};

const items = [
  {
    title: 'Expert Consultation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: <Icon />,
    actions: <Actions />
  },
  {
    title: 'Financing Assistance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: <Icon />,
    actions: <Actions />
  },
  {
    title: 'Dedicated Relationship Managers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: <Icon />,
    actions: <Actions />
  },
]


const SectionsExampleTwo = () => {

  return (
    <SectionContainerBase
      sectionContainerBaseClasses= {{
        outerContainerStyles: 'py-10 bg-yellow-500',
        innerContainerStyles: 'max-w-7xl mx-auto bg-green-500',
      }}
    >
      <CenteredGridWithHeading
        headingSection={<Heading />}
        sectionContentData={items}
        itemsRenderer={ItemRendererComponent} // should be an object
        centeredGridBaseClasses={{
          gridClasses: "grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8  md:space-y-0"
          // gridClasses: "grid grid-cols-1 sm:grid-cols-2 gap-4"
        }}
      />
    </SectionContainerBase>
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
            iconPosition='top-center'
            itemTitleDescriptionCardBaseClasses={{
              iconWrapper: 'flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white mx-auto',
              titleWrapper: 'mt-2 text-center',
              titleStyles: "text-xl font-medium text-gray-900",
              descriptionWrapper: "text-center mt-2",
              descriptionStyles: "text-base text-gray-500",
              actionWrapper: 'mt-2 text-center',
            }}
          />
        );
      })}
    </>
  );
}



export default SectionsExampleTwo;