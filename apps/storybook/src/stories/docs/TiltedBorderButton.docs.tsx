const docs = `

**TiltedBorderButton**  is first(*of hopefully many*) variation based Component of a general button Component provided by Reuse. This Component allows the user to create a button similar to **BaseButton**  with some additional Ui enhancements which would be little tricker to add otherwise. 
*This extended variation of base button allows the user to use a button element with tilted border.*

> This is an extended variation of BaseButton thus support all the previous props and  features of the normal reusejs **BaseButton**.

# Props

Following is the list of props that you can pass to *\`tiltedBorderButtonBaseClasses\`* object to overwrite the default classes:
1. **layout** :  Default values are *absolute top-0 right-0 bottom-0 left-0* to size the component to the parrent's size.
2. **zIndex** : Default of *-z-10* to make sure that the border is behind the Button, change value of zIndex to change that.
3. **borderWidth** : *"border-2"* is the default value for this key, which create a border of width '2px', You can also use values like \` border-[2px]\` to give custom values.
4. **rotation** : Default value of \`rotate-6\` rotates the border by 6deg clockwise, Arbitary values like \`rotate-[10deg]\` can also be use as well as negative values line \`-rotate-6\` to rotate the border div anti-clockwise.
5. **borderColor** : Default value of  \`border-black\` can be changed by using tailwind classes of giving arbitary values like \`border-[#ff5511]\`.
6. **scale** : To make the border pop outside the button and not be completely hiddden by it we give a scale to increase the size of border. The diffault value in this case is \`scale-105\` which increase the size of dorder div a factor of 1.05.


Example for custom **\`TiltedBorderButton\`** : \n
    \<TiltedBorderButton 
        label= "Click Here!!!"
        tiltedBorderButtonBaseClasses : {
            borderWidth : "border",
            rotation : "rotate-3",
            borderColor : "border-orange-400",
            scale : "scale-110"
        }
    /\>
`

export default docs;