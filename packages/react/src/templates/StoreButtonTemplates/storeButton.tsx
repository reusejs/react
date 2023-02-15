import React from "react";
import { useThemeContext } from "../../theme/ThemeProvider";
import ButtonBase from "../../atoms/buttons/base";
import AppleLogo from "./AppleLogo";
import PlayStoreLogo from "./PlayStoreLogo";

export interface StoreButtonInterface {
  storeName: "google" | "apple";
  mode?: "dark" | "light" | undefined;
}

const appStoreText = ["Download on the", " App Store"];
const playStoreText = ["GET IT ON", " Google Play"];

const Play = () => {
  return (
    <div className="ml-1 flex flex-col">
      <p className="text-left text-sm font-semibold leading-tight">
        {playStoreText[0]}
      </p>
      <p className="text-lg font-bold leading-tight">{playStoreText[1]}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex flex-col">
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
    font: "text-black",
  };
  if (props.mode === "dark") {
    parms = {
      ...parms,
      backgroundColor: "bg-black hover:shadow-lg hover:shadow-white	",
      border: "border-2 border-white",
      font: "text-white",
    };
  }
  return (
    <ButtonBase
      label={props.storeName === "google" ? <Play /> : <App />}
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

export default StoreButton;
