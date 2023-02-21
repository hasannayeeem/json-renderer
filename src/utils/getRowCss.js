const camelCaseToKebabCase = (camelCaseObj) => {
  return Object.keys(camelCaseObj)
    .map((key) => {
      const kebabCase = key.replace(
        /[A-Z]/,
        (match) => "-" + match.toLowerCase()
      );
      const property = kebabCase;
      const value = camelCaseObj[key];
      console.log(`${property}(property):${value}(value);`);
      return `${property}:${value};`;
    })
    .join("\n");
};

export default camelCaseToKebabCase;
