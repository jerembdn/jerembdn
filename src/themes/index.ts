import { DefaultTheme } from "styled-components";

import dark from "./dark";
import main from "./main";
import { Theme } from "@/types/theme";
import light from "./light";

export const createTheme = (theme: Theme): DefaultTheme => {
  return { ...main, ...theme };
};

const themes = { dark: createTheme(dark), light: createTheme(light) };

export default themes;