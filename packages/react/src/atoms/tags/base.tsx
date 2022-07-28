import React, { useRef, useState } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import { XIcon } from "@heroicons/react/solid";
import TextInputBase from "../../atoms/textInputs/base";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import pickAndMergeVariants from "../../utils/pickAndMergeVariants";

export interface TagInputBaseProps {
  placeholder?: string;
  defaultSelected?: string[];
  variant?: string;
  textInputBaseClasses?: any;
  onChange: (value: string[]) => void;
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
    ["display", "border", "background"],
    allProps,
    tagInputBaseClasses
  );

  const listClassNames = resolvedStyleProps(
    "list",
    ["display"],
    allProps,
    tagInputBaseClasses
  );

  const listItemClassNames = resolvedStyleProps(
    "listItem",
    [
      "margin",
      "display",
      "height",
      "background",
      "padding",
      "color",
      "font",
      "border",
    ],
    allProps,
    tagInputBaseClasses
  );

  const textInputListItemClassNames = resolvedStyleProps(
    "listItem",
    ["margin", "display", "height", "padding"],
    allProps,
    tagInputBaseClasses
  );

  const closeIconClassNames = resolvedStyleProps(
    "closeIcon",
    ["margin", "height", "width", "color", "font"],
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
      <ul className={listClassNames}>
        {tags.map((tag: string, index: number) => (
          <li className={listItemClassNames} key={index}>
            {tag}
            <XIcon
              className={closeIconClassNames}
              onClick={(e) => {
                e.stopPropagation();
                removeTag(index);
              }}
            />
          </li>
        ))}

        <li className={textInputListItemClassNames}>
          <TextInputBase
            forceFocus={focus}
            autoComplete="off"
            label=""
            htmlFor=""
            name="tag-input"
            type="text"
            placeholder={props.placeholder}
            onChange={(e) => {}}
            onKeyDown={(e) => inputKeyDown(e)}
            variant={props.variant}
            textInputBaseClasses={
              props.textInputBaseClasses || {
                wrapper: "relative mt-0 rounded-md shadow-sm h-8",
                width: "border-none bg-white grow p-0 h-8 outline-transparent	",
              }
            }
          />
        </li>
      </ul>
    </div>
  );
};

export default TagInputBase;
