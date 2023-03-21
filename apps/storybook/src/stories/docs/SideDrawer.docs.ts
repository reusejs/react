const docs = `
  **Side Drawer Layout** provides users with predefined custom Side drawer structure which can open a side drawer on \`Hover\` or on \`Click\`.

  Following is the props list for using SideDrawer component
  1. **\`ref\`** : To make use of *\`onClick\`* function, use \`ref\` object and \`handleClick\` function to open or close the drawer.
  2. **\`effectOn\`** : This is used to decide whether the \`Side Drawer\` will open on hover or click. Default value is \`hover\`. Only two values are accepted \`hover\` or \`click\`.
  3. **\`overlap\`** : This prop is used to select whether the side-drawer in its active state should overlap the main content or not. Default value for this prop is \`true\`. It can accept boolean values \`true\` and \`false\`.
  4. **\`callback\`** : This is a custom callback which can be used to perform a side-effect when the state of side drawer is changed.
  5. **\`sideDrawerContent\`** : This will accept the component which will be displayed in SideDrawer.
  6. **\`mainContent\`** : This will accept the component which will be displayed as Main Content.
  7. **\`Style Props\`** : One of the recurring feature of **\`ReuseJS/React\`** chas been the ability to style the provided components as you see fit. This component is no different. Following are the list of style props which will be used to style the layout:
        - **\`wrapper\`** : This style prop is used to wrap the whole component. Default value is *\`flex h-full w-full\`*.
        - **\`drawerLayout\`** : This style prop gives the normal layout for the side drawer. Default value is  *\`bg-red-600 transition-all overflow-hidden h-full shrink-0\`*.
        - **\`drawerActiveWidth\`** : This style prop holds the value for the width of side drawer when active. **For hover style side-drawer pass width as \`hover:w-1/6\` while for click based side-drawer pass width as \`w-1/6\`**. Default value for this props is *\`hover:w-6/12 md:hover:w-3/12\`*
        - **\`drawerInActiveWidth\`** : This style from holds the value for inactive width of side drawer. Default value for the style is *\`w-[70px]\`*. User can pass the value as **\`w-0\`** to make the sidedrawer **hidden** *(This should only be paired with \`click\` style side-drawer)*.
        - **\`contentLeftMargin\`** : This style props is only used when overlap prop is true. When the side-drawer is given with overflow true it will have absolute positioning so some part of main content might be hidden permanently. To prevent this we will be giving the same margin as the width of side-bar in \`inactive\` state. Default value is *\`ml-[70px]\`*
        - **\`contentWrapper\`** : This prop is used to style the main content. Default value is *\`h-full w-full bg-blue-200\`*.
`;

export default docs;
