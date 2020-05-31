export const randomRGBgenerator = (): number[] => {
  return [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ];
};
export const twoRandomIndexesGenerator = (): number[] => {
  const indexes = [
    Math.floor(Math.random() * 4),
    Math.floor(Math.random() * 4),
  ];
  if (indexes[0] !== indexes[1]) {
    return indexes;
  }
  return twoRandomIndexesGenerator();
};
