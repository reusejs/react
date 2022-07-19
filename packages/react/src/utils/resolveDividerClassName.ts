const resolvedDividerClassName = (
    {...props}
  ) => {
    console.log("prefix", props.showAsPrefix)
    if(props.showAsPrefix){
      return "flex items-center my-4 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
    }
    if(props.showAsSuffix){
      return "flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5"
    }
    return "flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
  };
  
  export default resolvedDividerClassName;