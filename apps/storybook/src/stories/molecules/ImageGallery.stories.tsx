import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageGallery } from '@reusejs/react';

export default {
  title: 'Organisms/ImageGallery',
  component: ImageGallery,
  argTypes: {},
} as ComponentMeta<typeof ImageGallery>;

const Template: ComponentStory<typeof ImageGallery> = (args) => (
  <ImageGallery {...args} />
);

const CONTENT = [
  {
    image: 'https://media.istockphoto.com/photos/-picture-id839048712',
    thumbnail:
      'https://media.istockphoto.com/photos/-picture-id839048712?b=1&k=20&m=839048712&s=170667a&w=0&h=wro7856YxY3_axFObV6ppenfUxjWRL6XSFbxtGCxleo=',
  },
  {
    image: 'https://media.istockphoto.com/photos/new-life-picture-id499999523',
    thumbnail:
      'https://media.istockphoto.com/photos/new-life-picture-id499999523?b=1&k=20&m=499999523&s=170667a&w=0&h=dusOHoEIu7J5lLeEoReANlxCvRfkhMnvzbXWgje5khE=',
  },
  {
    image:
      'https://media.istockphoto.com/photos/open-source-software-concept-design-picture-id1093975156',
    thumbnail:
      'https://media.istockphoto.com/photos/open-source-software-concept-design-picture-id1093975156?b=1&k=20&m=1093975156&s=170667a&w=0&h=HQmdQooMKzEH9sb32gsvXVN60gsKuxqz1TPFjyueCbo=',
  },
  {
    image:
      'https://media.istockphoto.com/photos/happy-young-couple-looking-inside-the-box-picture-id1157567678',
    thumbnail:
      'https://media.istockphoto.com/photos/happy-young-couple-looking-inside-the-box-picture-id1157567678?b=1&k=20&m=1157567678&s=170667a&w=0&h=rUnumPqbxYoRGlMZmgYY9szOi9UUCyUNqJ2EDaZBQGQ=',
  },
  {
    image:
      'https://media.istockphoto.com/photos/woman-at-home-checking-the-mail-picture-id1338099892',
    thumbnail:
      'https://media.istockphoto.com/photos/woman-at-home-checking-the-mail-picture-id1338099892?b=1&k=20&m=1338099892&s=170667a&w=0&h=tK8kZWpgw9T7MBwMOWmMMgAy-vwVqI-fORo655SJOjE=',
  },
  {
    image:
      'https://media.istockphoto.com/photos/woman-at-home-looking-at-a-utility-bill-that-came-in-the-mail-picture-id1367252890',
    thumbnail:
      'https://media.istockphoto.com/photos/woman-at-home-looking-at-a-utility-bill-that-came-in-the-mail-picture-id1367252890?b=1&k=20&m=1367252890&s=170667a&w=0&h=es_P_e3_NvmjUUGWr30fma7s38Kz9sixK5K9rGGZ5rU=',
  },
  {
    image:
      'https://media.istockphoto.com/photos/happy-man-receiving-a-package-at-home-picture-id1367252655',
    thumbnail:
      'https://media.istockphoto.com/photos/happy-man-receiving-a-package-at-home-picture-id1367252655?b=1&k=20&m=1367252655&s=170667a&w=0&h=m2E-YFZXPeDeKFqwmFIPzYXAHesCJOONGBA1dT2uSQE=',
  },
  {
    image:
      'https://media.istockphoto.com/photos/happy-man-at-home-checking-letters-in-the-mail-picture-id1345670588',
    thumbnail:
      'https://media.istockphoto.com/photos/happy-man-at-home-checking-letters-in-the-mail-picture-id1345670588?b=1&k=20&m=1345670588&s=170667a&w=0&h=w9f0dpHHWD7CQFdvDECaFLmy8nhHvbP22XOA0Ad3XKM=',
  },
  {
    image:
      'https://media.istockphoto.com/photos/network-security-cyber-security-digital-protection-computer-hack-picture-id1007464396',
    thumbnail:
      'https://media.istockphoto.com/photos/network-security-cyber-security-digital-protection-computer-hack-picture-id1007464396?b=1&k=20&m=1007464396&s=170667a&w=0&h=gq4ZMIO1df5XZqya1LJTGx0gFZFP4tgG6orxRZzKSI8=',
  },
  {
    image:
      'https://media.istockphoto.com/photos/open-source-concept-tablet-computer-on-office-desk-picture-id1346154270',
    thumbnail:
      'https://media.istockphoto.com/photos/open-source-concept-tablet-computer-on-office-desk-picture-id1346154270?b=1&k=20&m=1346154270&s=170667a&w=0&h=qzfLw2lgSZ3Kc1QQMT0yWGvhtrKPLxGJCZWtwzNQrIk=',
  },
  {
    image:
      'https://media.istockphoto.com/photos/social-networking-connection-picture-id684040590',
    thumbnail:
      'https://media.istockphoto.com/photos/social-networking-connection-picture-id684040590?b=1&k=20&m=684040590&s=170667a&w=0&h=zVVsArfj-P3an9xvo6WPaSRhf6qQyfH6DdqYPSuZDYo=',
  },
];

export const Default = Template.bind({});
Default.args = {
  images: CONTENT,
  interval: 2,
  gallerySliderBaseClasses: {
    imageActive: 'scale-110',
    backgroundColor: 'bg-blue-300',
  },
};

export const FullScreen = Template.bind({});
FullScreen.args = {
  images: CONTENT,
  interval: 0,
  gallerySliderBaseClasses: {
    imageActive: 'scale-110',
    backgroundColor: 'bg-black',
    height: "h-fit py-3",
  },
  galleryBaseClasses: {
    wrapper: "h-full flex flex-col justify-between",
    display: "flex items-center justify-center",
    height: "h-[600px]",
    width: "w-[800px]",
    margin: "mx-auto",
  },
};
