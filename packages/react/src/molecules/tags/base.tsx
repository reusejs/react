import React, { useRef, useState } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import { XIcon } from "@heroicons/react/solid";
import TextInputBase from "../../atoms/textInputs/base";
import BadgeBase from "../../atoms/badges/base";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import pickAndMergeVariants from "../../utils/pickAndMergeVariants";
import { TextInputBaseProps } from "../../atoms/textInputs/base";
import { BadgeBaseProps } from "../../atoms/badges/base";

export interface TagInputBaseProps {
  placeholder?: string;
  defaultSelected?: string[];
  variant?: string;
  textInputBaseClasses?: any;
  onChange: (value: string[]) => void;
  textInputBaseProps?: TextInputBaseProps;
  badgeBaseProps?: BadgeBaseProps;
}

const TagInputBase = (props: TagInputBaseProps) => {
  const theme: any = useThemeContext();
  let allProps = Object.assign({}, props);

  const tagInputBaseClasses = pickAndMergeVariants(
    "tagInputBaseClasses",
    props,
    theme
  );

  const wrapperClassNames = resolvedStyleProps(
    "wrapper",
    ["padding", "display", "border", "background"],
    allProps,
    tagInputBaseClasses
  );

  const listClassNames = resolvedStyleProps(
    "list",
    ["display"],
    allProps,
    tagInputBaseClasses
  );

  const textInputWrapperClassNames = resolvedStyleProps(
    "textInputWrapper",
    ["alignment"],
    allProps,
    tagInputBaseClasses
  );

  const closeIconClassNames = resolvedStyleProps(
    "closeIcon",
    ["spacing", "width", "color", "font"],
    allProps,
    tagInputBaseClasses
  );

  const [tags, setTags] = useState<string[]>(props.defaultSelected || []);

  const [focus, setFocus] = useState<string>("");

  const removeTag = (i: number): void => {
    const newTags = [...tags];
    newTags.splice(i, 1);
    setTags(newTags);
    props.onChange?.(newTags);
  };

  const inputKeyDown = (e: any): void => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      if (tags.find((tag: string) => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      let newTags = [...tags, val];
      setTags(newTags);
      props.onChange?.(newTags);
      e.target.value = "";
    } else if (e.key === "Backspace" && !val) {
      removeTag(tags.length - 1);
    }
  };

  return (
    <div
      className={wrapperClassNames}
      onClick={(e) => {
        e.stopPropagation();
        setFocus(Date.now().toString());
      }}
    >
      <div className={listClassNames}>
        {tags.map((tag: string, index: number) => (
          <BadgeBase
            key={index}
            {...props.badgeBaseProps}
            label={tag}
            badgeSuffix={
              <XIcon
                className={closeIconClassNames}
                onClick={(e) => {
                  e.stopPropagation();
                  removeTag(index);
                }}
              />
            }
          />
        ))}

        <div className={textInputWrapperClassNames}>
          <TextInputBase
            {...props.textInputBaseProps}
            forceFocus={focus}
            autoComplete="off"
            // label=""
            labelBaseProps={{
              label:""
            }}
            htmlFor=""
            name="tag-input"
            type="text"
            onChange={(e) => {}}
            onKeyDown={(e) => inputKeyDown(e)}
            variant={props.variant}
          />
        </div>
      </div>
    </div>
  );
};

export default TagInputBase;
