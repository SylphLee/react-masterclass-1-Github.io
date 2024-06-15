import 'styled-components';

declare module "styled-components" {
  export interface DefaultTheme {
    mode: {
      mainBackground: string;
      primaryText: string;
      secondaryText: string;
      disable: string;
      border: string;
      divider: string;
      boxColor: string;
      background: string;
      themeIcon: string;
      linkColor: string;
      Description:string,
    };
  }
}