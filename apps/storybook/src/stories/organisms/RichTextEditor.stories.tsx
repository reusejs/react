import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FooterBase, DropdownBase } from '@reusejs/react';
import LexicalBase from './lexical/LexicalBase';

export default {
  title: 'Organisms/RichTextEditor',
  component: LexicalBase,
  argTypes: {},
} as ComponentMeta<typeof LexicalBase>;

const Template: ComponentStory<typeof LexicalBase> = (args) => <LexicalBase />;

export const Default = Template.bind({});
Default.args = {};
