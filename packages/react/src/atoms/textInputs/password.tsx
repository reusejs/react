import React, { ReactNode, useState } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import TextInputBase, { TextInputBaseProps } from "./base";

// export interface TextInputBaseProps {
//   label: string;
//   name: string;
//   type: string;
//   value?: string;
//   disabled: false;
//   ariaDescribedby?: string;
//   htmlFor: string;
//   textInputStyles?: any;
//   variant?: string;
//   placeholder?: string;
//   textInputSuffix?: any;
//   textInputPrefix?: any;
//   textInputBottom?: any;
//   error?: any;
//   textInputClasses?: {
//     wrapper?: string;
//     alignment?: string;
//     width?: string;
//     borderRadius?: string;
//     border?: string;
//     focus?: string;
//     padding?: string;
//     font?: string;
//     textColor?: string;
//     backgroundColor?: string;
//     placeholderColor?: string;
//   };
//   textInputErrorClasses?: {
//     wrapper?: string;
//     alignment?: string;
//     width?: string;
//     borderRadius?: string;
//     border?: string;
//     focus?: string;
//     padding?: string;
//     font?: string;
//     textColor?: string;
//     backgroundColor?: string;
//     placeholderColor?: string;
//   };
//   onChange: (value?: string) => void;
// }

export interface PasswordTextInputBaseProps extends TextInputBaseProps {
  showPassword?: any;
}

const PasswordTextInputBase = React.forwardRef(
  (props: PasswordTextInputBaseProps, ref) => {
    const [inputType, setInputType] = useState<string>("password");

    const ShowHidePasswordIcon = () => {
      if (props.showPassword) {
        return (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
              type="button"
              className="pointer-cursor"
              onClick={() => {
                console.log("On click doesn");
                setInputType((prevInputType) => {
                  return prevInputType === "text" ? "password" : "text";
                });
              }}
            >
              {props.showPassword && (
                <props.showPassword inputType={inputType} />
              )}
            </button>
          </div>
        );
      }

      return null;
    };

    return (
      <TextInputBase
        {...props}
        type={inputType}
        textInputSuffix={<ShowHidePasswordIcon />}
      />
    );
  }
);

export default PasswordTextInputBase;
