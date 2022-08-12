const resolvedStyleProps = (
  propName: string,
  styleProps: string[],
  componentProps: any,
  theme: any
) => {
  // console.log(styleProps);
  let resolvedProps = styleProps.map((s) => {
    return (
      (componentProps[propName] && componentProps[propName][s]) ||
      (componentProps.variant &&
        theme &&
        theme.variants &&
        theme.variants[componentProps.variant] &&
        theme.variants[componentProps.variant][propName] &&
        theme.variants[componentProps.variant][propName][s]) ||
      (theme && theme[propName] && theme[propName][s])
    );
  });

  return resolvedProps.filter(Boolean).join(" ");
};

export default resolvedStyleProps;
