export const convertRGBtoRGBA = (rgb: string, alpha: number): string => {
  const rgbArray = rgb.split(",");
  return `rgba(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}, ${alpha})`;
};
