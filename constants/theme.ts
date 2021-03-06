import { Dimensions } from "react-native";
import { DefaultTheme } from "styled-components/native";

import {
  ACCENT,
  ACCENT_DARK,
  BACKGROUND,
  DISABLED,
  PRIMARY,
  SECONDARY,
  TEXT,
  TRANSPARENT,
} from "./colors";

const MIN_WIDTH = 375;

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const palette = {
  background: BACKGROUND,
  text: TEXT,
  primary: PRIMARY,
  secondary: SECONDARY,
  disabled: DISABLED,
  accent: ACCENT,
  accentDark: ACCENT_DARK,
  transparent: TRANSPARENT,
};

const theme: DefaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  borderRadius: [0, 2, 4],
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 24,
    xl: 32,
  },
  fontWeights: {
    normal: "400",
    semi: "700",
    bold: "900",
  },
  palette,
  components: {
    box: {
      ...palette,
      default: palette.transparent,
    },
    text: {
      ...palette,
      default: palette.text,
    },
  },
  layout: {
    window: {
      width: WIDTH,
      height: HEIGHT,
    },
    isSmallDevice: WIDTH < MIN_WIDTH,
  },
};

export default theme;

export type PaletteProps = {
  [K in keyof typeof palette]?: boolean;
};
