import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  SectionsExampleOne,
  SectionsExampleTwo,
  IconTitleDescriptionCard,
  CenteredGridBase,
} from '@reusejs/react';

export default {
  title: 'Templates/SectionExamples',
  component: SectionsExampleOne,
  argTypes: {},
} as ComponentMeta<typeof SectionsExampleOne>;

const ExampleOneTemplate: ComponentStory<typeof SectionsExampleOne> = (
  args
) => <SectionsExampleOne {...args} />;

const ExampleTwoTemplate: ComponentStory<typeof CenteredGridBase> = (args) => (
  <SectionsExampleTwo {...args} />
);

const Logo = () => {
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

// const ItemRendererComponent = (props?: any) => {
//   return (
//     <>
//       {props.items.map((item?: any, index?: number) => {
//         return (
//           <IconTitleDescriptionCard
//             key={index}
//             title={
//               <p className='text-lg font-medium leading-6 text-gray-900'>
//                 {item.title}
//               </p>
//             }
//             logo={item.logo}
//             description={
//               <p className='mt-2 text-base text-gray-500'>{item.description}</p>
//             }
//             logoWrapperClasses={item.logoWrapperClasses}
//           />
//         );
//       })}
//     </>
//   );
// };

// const HeadingSection = (props?: any) => {
//   return (
//     <div className={props.headingWrapper}>
//       <SectionTitle title={props.heading} />

//       <SectionDescription description={props.description} />
//     </div>
//   );
// };

// export const Base = BaseTemplate.bind({});
// Base.args = {
//   items: items,
//   itemsRenderer: ItemRendererComponent,
// };

export const ExampleOne = ExampleOneTemplate.bind({});
ExampleOne.args = {};

export const ExampleTwo = ExampleTwoTemplate.bind({});
ExampleOne.args = {};
