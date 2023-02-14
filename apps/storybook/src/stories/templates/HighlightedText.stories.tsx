import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HighlightedText } from '@reusejs/react';
import HighlightedTextDocs from '../docs/HighlightedText.docs';

export default {
  title: 'Templates/HighlightedText',
  component: HighlightedText,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: HighlightedTextDocs,
      },
    },
  },
} as ComponentMeta<typeof HighlightedText>;

const Template: ComponentStory<typeof HighlightedText> = (args) => (
  <div className='flex'>
    Hello!! How are you <HighlightedText {...args}>User</HighlightedText>
  </div>
);

export const Sample1 = Template.bind({});
Sample1.args = {
  highlightedTextBaseClasses: {
    height: 40,
    width: 80,
    margin: 'ml-6',
  },
};

const Template2: ComponentStory<typeof HighlightedText> = (args) => (
  <div className='flex'>
    <HighlightedText {...args}>This is a sample template</HighlightedText>
  </div>
);

export const Sample2 = Template2.bind({});
Sample2.args = {
  highlightedTextBaseClasses: {
    height: 100,
    width: 400,
    margin: 'ml-6',
    top: 'top-[-40px]',
    scale: 'scale-y-50',
  },
};

const Template3: ComponentStory<typeof HighlightedText> = (args) => (
  <div className='flex'>
    Your <HighlightedText {...args}>Life</HighlightedText> with ReUse
  </div>
);

export const Sample3 = Template3.bind({});
Sample3.args = {
  highlightedTextBaseClasses: {
    height: 100,
    width: 200,
    margin: 'mx-2',
    top: 'top-[-40px]',
    scale: 'scale-y-50 scale-x-[0.2]',
  },
};

const Template4: ComponentStory<typeof HighlightedText> = (args) => (
  <div className='flex flex-col'>
    <p className='flex'>
      Ever had these <HighlightedText {...args}>questions</HighlightedText> in
      mind?
    </p>
    <p>No worries, we have the answers!</p>
  </div>
);

export const Sample4 = Template4.bind({});
Sample4.args = {
  highlightedTextBaseClasses: {
    color: 'text-blue-700',
    height: 100,
    width: 200,
    margin: 'mx-2',
    top: 'top-[-38px]',
    scale: 'scale-y-50 scale-x-[0.4]',
  },
};
