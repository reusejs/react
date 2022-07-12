const resolvedStyleProps = (
  propName: string,
  styleProps: string[],
  componentProps: any,
  theme: any
) => {
  console.log("theme.va", theme.variants, componentProps.variant);

  let resolvedProps = styleProps.map((s) => {
    return (
      (componentProps[propName] && componentProps[propName][s]) ||
      (componentProps.variant &&
        theme.variants[componentProps.variant] &&
        theme.variants[componentProps.variant][propName] &&
        theme.variants[componentProps.variant][propName][s]) ||
      theme[propName][s]
    );
  });

  return resolvedProps.filter(Boolean).join(" ");
};

export default resolvedStyleProps;
