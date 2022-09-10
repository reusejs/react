const resolvedStyleProps = (
  propName: string,
  styleProps: string[],
  componentProps: any,
  theme: any
) => {
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

  resolvedProps.push(`${propName}_${styleProps.join("_")}`);

  return resolvedProps.filter(Boolean).join(" ");
};

export default resolvedStyleProps;
