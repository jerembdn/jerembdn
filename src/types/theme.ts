export type Theme = {
  id: number;
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
    info: string;

    background: {
      primary: string;
      secondary: string;
    };

    text: {
      primary: string;
      secondary: string;
      tertiary: string;
    };

    elements: {
      border: string;

      link: {
        text: string;
      };
    };
  };
};
