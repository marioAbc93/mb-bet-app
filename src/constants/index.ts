import Themes from "../theme/theme";

export type ThemeMode = keyof typeof Themes;

export interface Theme {
  themeMode: ThemeMode;
}

export interface ThemeSelection {
  themeMode: "light" | "dark";
}
export interface AppContainerProps {
  theme: ThemeSelection;
  setTheme: (theme: "light" | "dark") => void;
}

export interface HeaderProps {
  theme: string;
  setTheme: (theme: "light" | "dark") => void;
}

type ThemeType = typeof Themes.light;

export interface ButtonProps {
  color?: "primary" | "secondary" | "warning" | "danger" | "success";
  onClick: () => void;
  icon?: JSX.Element;
  description?: string;
  value?: string | number;
  theme?: ThemeType;
  orientation?: "row" | "column";
  isBet?: boolean;
}

export type AlertColor = "success" | "warning" | "error";

export const getColorFromTheme = (colorKey: string) => {
  switch (colorKey) {
    case "#4d82bc":
      return "#005187";
    case "#C6016B":
      return "#e44f9c";
    case "#A2DC8D":
      return "#d0fdd7";
    case "#FFC660":
      return "#ecab0f";
    case "#EF8E8B":
      return "#e97377";
    default:
      return "#FFFFFF";
  }
};

export interface InputProps {
  type: string;
  placeholder: string;
  align?: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: (newValue: number) => void;
}
