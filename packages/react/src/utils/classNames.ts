const classNames = (...classes: string[]) => {
  // console.log("classes", classes);
  return classes.filter(Boolean).join(" ");
};

export default classNames;
