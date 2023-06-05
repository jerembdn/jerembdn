import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import useThemeDetector from "@/hooks/useThemeDetector";
import themes from "@/themes";
import { Theme } from "@/types/theme";

const GlobalThemeContext = React.createContext({
  globalTheme: themes.dark,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  switchTheme: (_theme: "dark" | "light") => undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setGlobalTheme: (_theme: Theme) => undefined,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobalThemeProvider = (props: any) => {
  const isDarkTheme = useThemeDetector();
  const [globalTheme, setGlobalTheme] = React.useState<DefaultTheme>(
    themes.dark
  );

  React.useEffect(() => {
    setGlobalTheme(isDarkTheme ? themes.dark : themes.light);
  }, [isDarkTheme]);

  const switchTheme = React.useCallback((theme: "dark" | "light") => {
    setGlobalTheme(themes[theme]);
  }, []);

  if (!globalTheme) return null;

  return (
    <GlobalThemeContext.Provider
      value={{ globalTheme, switchTheme, setGlobalTheme }}
      {...props}
    >
      <ThemeProvider theme={globalTheme}>{props.children}</ThemeProvider>
    </GlobalThemeContext.Provider>
  );
};

export { GlobalThemeContext, GlobalThemeProvider };
