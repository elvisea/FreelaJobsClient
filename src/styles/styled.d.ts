import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      backgroundColor: string;
      white: string;
      orange: string;
      grayHard: string;
      gray: string;
      inputs: string;
      shape: string;
      blackMedium: string;

      error: string;
    };

    fonts: {
      regular: string;
      bold: string;
    };
  }
}
