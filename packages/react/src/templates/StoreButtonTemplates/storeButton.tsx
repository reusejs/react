import React from "react";
import { useThemeContext } from "../../theme/ThemeProvider";
import ButtonBase from "../../atoms/buttons/base";
import AppleLogo from "./AppleLogo";
import PlayStoreLogo from "./PlayStoreLogo";

export interface StoreButtonInterface {
  storeName: "google" | "apple";
  mode?: "dark" | "light" | undefined;
  responsive?: boolean;
}

export interface ContentProps {
  responsive: boolean;
}

const appStoreText = ["Download on the", " App Store"];
const playStoreText = ["GET IT ON", " Google Play"];

const Play = (props: ContentProps) => {
  const style = props.responsive
    ? "hidden md:ml-1 md:flex md:flex-col"
    : "ml-1 flex flex-col";
  return (
    <div className={style}>
      <p className="text-left text-sm font-semibold leading-tight">
        {playStoreText[0]}
      </p>
      <p className="text-lg font-bold leading-tight">{playStoreText[1]}</p>
    </div>
  );
};

const App = (props: ContentProps) => {
  const style = props.responsive
    ? "hidden md:flex md:flex-col"
    : "flex flex-col";
  return (
    <div className={style}>
      <p className="w-full text-sm leading-tight">{appStoreText[0]}</p>
      <p className="w-full scale-x-125 text-lg font-bold leading-tight">
        {appStoreText[1]}
      </p>
    </div>
  );
};

const StoreButton = (props: StoreButtonInterface) => {
  let parms = {
    backgroundColor: "bg-white hover:shadow-xl",
    border: "border-2 border-black",
    borderRadius: props.responsive
      ? "rounded-full md:rounded-md"
      : "rounded-md",
    textColor: "text-black",
    padding: props.responsive ? "px-3 py-3 md:px-4 md:py-2" : "px-4 py-2",
  };
  if (props.mode === "dark") {
    parms = {
      ...parms,
      backgroundColor: "bg-black hover:shadow-lg hover:shadow-white	",
      border: "border-2 border-white",
      textColor: "text-white",
    };
  }
  return (
    <ButtonBase
      label={
        props.storeName === "google" ? (
          <Play responsive={props.responsive as boolean} />
        ) : (
          <App responsive={props.responsive as boolean} />
        )
      }
      buttonBaseClasses={{ ...parms }}
      buttonPrefix={
        props.storeName === "google" ? (
          <PlayStoreLogo />
        ) : (
          <AppleLogo mode={props.mode === "dark" ? "dark" : ""} />
        )
      }
    />
  );
};

StoreButton.defaultProps = {
  mode: "light",
  responsive: true,
};

export default StoreButton;
