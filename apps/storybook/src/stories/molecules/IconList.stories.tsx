import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconList } from '@reusejs/react';
import IconListDocs from '../docs/IconList.docs';
import ListIconExample1 from '../assets/ListIconExample1';

export default {
  title: 'Molecules/IconList',
  component: IconList,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        // component: IconListDocs,
      },
    },
  },
} as ComponentMeta<typeof IconList>;

const Template: ComponentStory<typeof IconList> = (args) => (
  <IconList {...args} />
);

const Elements = [
    'osoihdjkashjdh kjs dkhajs hdkgaskd',
    'dbahsbdhahsjkdhkjahsjkdhaskjhdjka',
    'sajdh jkshdjkas gdhgjhks gajgkfjegf fy galgfye gfliyag lygg dflgaldgfljl ',
    'dgh gqlgshjd gakjgsdjhfg ajhd gkgjfhaghjdgflylg hyfgslfhgjshdu gh;fuigvsh',
    'b gldhfgajhg fhgalhdf hsgadjhfg hjag jfyg ejhfg ahg lfgeyfga,jhgf',
    'aghdf ga dyf galyhgehaeguif;;hgasuoh ai asphapsufhou4h3ouh hegfh hfuahdkjf jkad hfku',
    'fdg jagjyghjgiygdfsgad7ta dfygd jfg adyifgtyaldg fja7 sgdlgh d',
  ];

export const Default = Template.bind({});
Default.args = {
  content: Elements,
};

export const CustomIconExamle = Template.bind({});
CustomIconExamle.args = {
  content: Elements,
  customIcon: <ListIconExample1/>,
  iconListBaseClasses: {
    width: "w-1/2"
  }
};

