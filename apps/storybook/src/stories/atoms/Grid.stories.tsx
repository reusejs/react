import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GridBase } from '@reusejs/react';

export default {
  title: 'Atoms/Grid',
  component: GridBase,
  argTypes: {},
} as ComponentMeta<typeof GridBase>;

interface CardProps {
  label: string;
  color: string;
}

const Card: React.FC<CardProps> = ({ ...props }) => {
  return <div className={props.color}>{props.label}</div>;
};

const SAMPLEDATA = [
  { label: 'One', color: 'bg-rose-400' },
  { label: 'Two', color: 'bg-cyan-400' },
  { label: 'Three', color: 'bg-lime-400' },
  { label: 'Four', color: 'bg-amber-400' },
  { label: 'Five', color: 'bg-red-400' },
  { label: 'Six', color: 'bg-indigo-400' },
  { label: 'Seven', color: 'bg-orange-400' },
];

const CardArrayPrimary = SAMPLEDATA.map((values, index) => {
  return <Card key={index} label={values.label} color="bg-blue-400 py-3 rounded-lg flex justify-center text-white font-semibold" />;
});

const CardArrayColored = SAMPLEDATA.map((values, index) => {
    return <Card key={index} label={values.label} color={values.color} />;
  });

const Template: ComponentStory<typeof GridBase> = (args) => (
  <>
  <div className='font-bold text-2xl'>This is a Grid Base</div>
  <GridBase {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  content: CardArrayPrimary,
  labelBaseProps: {
    label: 'This is a grid',
    labelBaseClasses: {
      color: 'text-blue-900',
      font: 'text-2xl font-bold',
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
    content: CardArrayPrimary,
    labelBaseProps: {
        label: 'This is col-flow grid',
        variant: "secondary", 
      },
    variant:"secondary",
};

export const NoLabel = Template.bind({});
NoLabel.args = {
    content: CardArrayPrimary,
};

export const StyledElements = Template.bind({});
StyledElements.args = {
    content: CardArrayColored,
    labelBaseProps: {
        label: 'This is a Styled grid with border',
        labelBaseClasses: {
          color: 'text-black-500',
          font: 'text-2xl font-bold',
        },
      },
    gridBaseClasses:{
        grid: "grid",
        alignment: "",
        size: "w-full h-full",
        columns: "grid-cols-4",
        gap: "gap-3",
        padding: "",
        margin: "",
        backgroundColor: "bg-lime-300",
        border: "border-2 border-amber-700 rounded-lg",
    }
};
