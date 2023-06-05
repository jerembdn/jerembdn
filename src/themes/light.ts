import { Theme } from "@/types/theme";
import { createColor } from "@/utils/createColor";

const light: Theme = {
  id: 1,
  colors: {
    primary: createColor(176, 36, 241),
    secondary: createColor(176, 96, 241),
    success: createColor(46, 204, 113),
    warning: createColor(241, 196, 15),
    danger: createColor(231, 76, 60),
    info: createColor(52, 152, 219),

    background: {
      primary: createColor(255, 255, 255),
      secondary: createColor(245, 245, 245),
    },

    text: {
      primary: createColor(17, 19, 21),
      secondary: createColor(51, 51, 51),
      tertiary: createColor(119, 119, 119),
    },

    elements: {
      border: createColor(17, 19, 21),

      link: {
        text: createColor(17, 19, 21),
      },
    },
  },
};

export default light;
