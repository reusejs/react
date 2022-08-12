export interface LabelBaseProps {
  label?: string;
  htmlFor?: string;
  labelStyles?: React.HTMLAttributes<HTMLLabelElement>;
  variant?: string;
  labelBaseClasses?: {
    alignment?: string;
    color?: string;
    font?: string;
  };
}

export interface GridBaseClasses {
  gap?: string;
  grid?: string;
  size?: string;
  margin?: string;
  border?: string;
  columns?: string;
  padding?: string;
  alignment?: string;
  backgroundColor?: string;
}
