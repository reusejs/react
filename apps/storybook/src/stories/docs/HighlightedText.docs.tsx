const docs = `
**Highlighted Text** component allow you to pass a string or jsx component and wrap it with an svg as shown in following example to highlight the section.

It is a **wrapper style** component which means that you can use it to wrap the text/component that you want to highlight, For eg \` Hello!! How are you <HighlightedText>User</HighlightedText>\`

> Since we are using an **svg** as a wrapper and not a div the styling will leave a lot to be desired, hence to fit the wrapper in our mold we will be using scale and margin properties.

Following is the prop list that you can pass to the object \`highlightedTextBaseClasses\` to style the svg to suite your particular need.

1. **color** : This prop refers the fill color of the store used to make the svg. We are using \`currentColor\` property of svg, so the color is inherited from the parent div. This prop can take any tailwind \`text-color\` as value, for example , **\`text-red-400\`, \`text-blue-300\`, \`text-black\`, \`text-slate-400\` **etc are some valid values for this field.
                If the readily available colors are not enough we can give arbitary values, using rgb value of colors, for example **\`text-[#50d71e]\`, \`text-[#af02f0]\` ** which are also acceptable props values.
2. **width** : This value is used to define the width of svg component, Use of this value will be limited as we will be using scale to fit our compnent in the required mold. The default value for this prop is **\`200px\`**. This prop only accepts **\`numbers\`**.
2. **height** : This value is used to define the height of svg component, Use of this value will also be limited as we will be using scale to fit our compnent for the required use case. The default value for this prop is **\`50px\`**. This prop only accepts **\`numbers\`**.              
3. **margin** : Margin here is used to space the component properly with respect to its surrounding elements, we use margin mostly so that our svg does not overlap or interfeer with any other text/components in the page, This props accepts string which can be tailwind classes for margin, For Example,  **\`mx-2\`, \`mx-4 my-1\`** or abritarty values like **\`mx-[-10px]\`** for more specific margin.
4. **top** : One of the Styling issue we encountered for this component is that due to absolute positioning of the svg, it will always begin from the top of its parent div, so to style it in such a way that the svg looks to be wrapping over the text we give a negative spacing to the svg from top, thus achiving the look of text wrapped in svg. The default value for this field is, **\` top-[-7px] \`**. You can over write this value by passing tailwind positioning values like **\`-top-4\`, \`-top-2\`** or arbitary values like **\` top-[-10px]\` , \`top-[-20px]\` ** etc
5. **scale** : For resizing the component to required dimensions we can scale the componet for our need, for example **\`scale-x-50\`** will decrease the size of svg by 50% along the x-axis while **\`scale-y-50\`** will decrease the size of svg along y-axis. Thus by adjusting the scale value we can fit the component to wrap our text perfetly. We can also give abritarty values here so if the default tailwind scale values are not enough, for eg. **\`"scale-y-50 scale-x-[0.4]"\`** or  **\`"scale-y-50 scale-x-[0.2]"\`** etc are acceptable scale values.

> Because of using svg for the wrapper, the customizability of the component suffer a sharp decline, Thus the best method to achive the desired look of the compoonent will be to go with default **width** and **height** and adjust **top**, **scale** and **margin** to fit your text/comonent in the wrapper. 

`;

export default docs;
