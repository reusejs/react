import React, { ReactNode, useState } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import TextInputBase, { TextInputBaseProps } from "./base";

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
        textInputBaseClasses={{
          padding: "pr-12",
        }}
        type={inputType}
        textInputSuffix={<ShowHidePasswordIcon />}
      />
    );
  }
);

export default PasswordTextInputBase;
