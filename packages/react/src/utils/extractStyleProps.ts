const extractStyleProps = (
  propName: string,
  styleProps: string[],
  componentProps: any,
  theme: any
) => {
  let newProps: any = {};

  for (let index = 0; index < styleProps.length; index++) {
    const s = styleProps[index];
    const value: string =
      (componentProps[propName] && componentProps[propName][s]) ||
      (componentProps.variant &&
        theme.variants[componentProps.variant] &&
        theme.variants[componentProps.variant][propName] &&
        theme.variants[componentProps.variant][propName][s]) ||
      theme[propName][s];

    newProps[s] = value;
  }

  return newProps;
};

export default extractStyleProps;
