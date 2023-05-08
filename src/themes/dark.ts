import { Theme } from "@/types/theme";
import { createColor } from "@/utils/createColor";

const dark: Theme = {
  id: 0,
  colors: {
    primary: createColor(176, 36, 241),
    secondary: createColor(176, 96, 241),
    success: createColor(46, 204, 113),
    warning: createColor(241, 196, 15),
    danger: createColor(231, 76, 60),
    info: createColor(52, 152, 219),

    background: {
      primary: createColor(17, 19, 21),
      secondary: createColor(26, 29, 31),
    },

    text: {
      primary: createColor(255, 255, 255),
      secondary: createColor(200, 200, 200),
      tertiary: createColor(150, 150, 150),
    },

    elements: {
      link: {
        text: createColor(255, 255, 255),
      },
    },
  },
};

export default dark;
