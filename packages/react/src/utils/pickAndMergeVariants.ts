const pickAndMergeVariants = (
  propName: string,
  componentProps: any,
  theme: any
) => {
  const variantClasses: any = {};
  if (
    componentProps.variant &&
    theme.variants &&
    theme.variants[componentProps.variant]
  ) {
    variantClasses[componentProps.variant] =
      theme.variants[componentProps.variant][propName];
  }

  const merged = {
    ...theme[propName],
    ...(componentProps.variant &&
      theme.variants &&
      theme.variants[componentProps.variant] && {
        variants: variantClasses,
      }),
  };

  return merged;
};

export default pickAndMergeVariants;
