import { BaseSideDrawer } from '@reusejs/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useRef } from 'react';
import SideDrawerDocs from '../docs/SideDrawer.docs';

export default {
  title: 'Layouts/SideDrawer',
  component: BaseSideDrawer,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: SideDrawerDocs,
      },
    },
  },
} as ComponentMeta<typeof BaseSideDrawer>;

const Template: ComponentStory<typeof BaseSideDrawer> = (args) => {
  const componentRef = useRef<any>();

  const click = () => {
    if (
      componentRef &&
      componentRef.current &&
      componentRef.current.handleClick
    ) {
      componentRef.current.handleClick();
    }
  };

  const SideDrawerContent = () => {
    return (
      <div className='h-full w-full '>Hello this is side drawer content</div>
    );
  };

  const MainContent = () => {
    return (
      <div className='flex h-full flex-col items-center justify-center bg-yellow-400 md:flex-row'>
        <label>This is main content</label>
        <button
          className='ml-10 h-fit w-fit bg-blue-700 py-2 px-3 md:ml-56 md:flex-row md:px-6 md:py-5'
          onClick={() => {
            click();
          }}
        >
          Click Here!!
        </button>
      </div>
    );
  };

  return (
    <div className='h-[500px] w-full'>
      <BaseSideDrawer
        ref={componentRef}
        sideDrawerContent={<SideDrawerContent />}
        mainContent={<MainContent />}
        {...args}
      />
    </div>
  );
};

export const DefaultHoverWithOverlap = Template.bind({});
DefaultHoverWithOverlap.args = {};

export const HoverWithNoOverlap = Template.bind({});
HoverWithNoOverlap.args = {
  overlap: false,
  baseSideDrawerStyleClasses: {
    drawerInActiveWidth: 'w-[100px]',
    contentLeftMargin: 'ml-[100px]',
  },
};

export const ClickWithOverlap = Template.bind({});
ClickWithOverlap.args = {
  effectOn: 'click',
  baseSideDrawerStyleClasses: {
    drawerActiveWidth: 'w-5/12 md:w-3/12',
    drawerInActiveWidth: 'w-[70px]',
    contentLeftMargin: 'ml-[70px]',
  },
};

export const ClickWithNoOverlap = Template.bind({});
ClickWithNoOverlap.args = {
  effectOn: 'click',
  overlap: false,
  baseSideDrawerStyleClasses: {
    drawerActiveWidth: 'md:w-4/12 w-6/12',
    drawerInActiveWidth: 'w-[70px]',
    contentLeftMargin: 'ml-[70px]',
  },
};
export const HiddenSidedrawer = Template.bind({});
HiddenSidedrawer.args = {
  effectOn: 'click',
  overlap: true,
  baseSideDrawerStyleClasses: {
    drawerActiveWidth: 'w-5/12 md:w-4/12',
    drawerInActiveWidth: 'w-0',
    contentLeftMargin: 'ml-0',
  },
};
