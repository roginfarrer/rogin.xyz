import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";
import {
  purple,
  yellow,
  orange,
  blue,
  red,
  green,
  mauve,
  mauveDark,
  blueDark,
  redDark,
  greenDark,
  orangeDark,
  yellowDark,
  purpleDark,
} from "@radix-ui/colors";
import { mapKeys } from "./utils";

export const lightTheme = "light";
export const darkTheme = "dark";

const baseTheme = {
  space: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "24px",
    6: "32px",
    7: "48px",
    8: "64px",
    9: "96px",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  lineHeights: {
    xs: "1rem",
    sm: "1.25rem",
    base: "1.5rem",
    lg: "1.75rem",
    xl: "1.75rem",
    "2xl": "2rem",
    "3xl": "2.25rem",
    "4xl": "2.5rem",
    "5xl": "4rem",
    "6xl": "4rem",
    "7xl": "5rem",
    "8xl": "",
    "9xl": "1",
  },
  radii: {
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
  },
  fonts: {
    base: "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif",
  },
};

export const vars = createGlobalTheme(`.${lightTheme}`, {
  ...baseTheme,
  colors: {
    // ...gray,
    gray1: mauve.mauve1,
    gray2: mauve.mauve2,
    gray3: mauve.mauve3,
    gray4: mauve.mauve4,
    gray5: mauve.mauve5,
    gray6: mauve.mauve6,
    gray7: mauve.mauve7,
    gray8: mauve.mauve8,
    gray9: mauve.mauve9,
    gray10: mauve.mauve10,
    gray11: mauve.mauve11,
    gray12: mauve.mauve12,
    ...orange,
    ...yellow,
    ...blue,
    ...red,
    ...green,
    ...purple,
    ...mapKeys(
      blue,
      (_, key) =>
        key.replace(
          "blue",
          "accent",
        ) as typeof key extends `blue${infer Digit extends number}`
          ? `accent${Digit}`
          : never,
    ),
  },
});

createGlobalTheme(`.${darkTheme}`, vars, {
  ...baseTheme,
  colors: {
    // ...grayDark,
    gray1: mauveDark.mauve1,
    gray2: mauveDark.mauve2,
    gray3: mauveDark.mauve3,
    gray4: mauveDark.mauve4,
    gray5: mauveDark.mauve5,
    gray6: mauveDark.mauve6,
    gray7: mauveDark.mauve7,
    gray8: mauveDark.mauve8,
    gray9: mauveDark.mauve9,
    gray10: mauveDark.mauve10,
    gray11: mauveDark.mauve11,
    gray12: mauveDark.mauve12,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...orangeDark,
    ...yellowDark,
    ...purpleDark,
    ...mapKeys(
      blueDark,
      (_, key) =>
        key.replace(
          "blue",
          "accent",
        ) as typeof key extends `blue${infer Digit extends number}`
          ? `accent${Digit}`
          : never,
    ),
  },
});

globalStyle(".green", {
  vars: (() => {
    const changes: any = {};
    let i = 1;
    while (i <= 12) {
      // @ts-expect-error
      changes[vars.colors[`accent${i}`]] = vars.colors[`green${i}`];
      i++;
    }
    return changes;
  })(),
});

globalStyle(".red", {
  vars: (() => {
    const changes: any = {};
    let i = 1;
    while (i <= 12) {
      // @ts-expect-error
      changes[vars.colors[`accent${i}`]] = vars.colors[`red${i}`];
      i++;
    }
    return changes;
  })(),
});

globalStyle(".purple", {
  vars: (() => {
    const changes: any = {};
    let i = 1;
    while (i <= 12) {
      // @ts-expect-error
      changes[vars.colors[`accent${i}`]] = vars.colors[`purple${i}`];
      i++;
    }
    return changes;
  })(),
});

export const supportedFonts = {
  "Monaspace Neon": "MonaspaceNe Nerd Font",
  Helvetica: "Helvetica",
  Geist: "Geist",
  Georgia: "Georgia",
  "Zed Mono": "Zed Mono",
};

export const supportedFontClasses: string[] = [];
const baseFonts =
  "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif";

Object.entries(supportedFonts).forEach(([name, fontName]) => {
  const className = name.replace(" ", "");
  supportedFontClasses.push(className);
  globalStyle(`.${className}`, {
    vars: {
      [vars.fonts.base]: `"${fontName}",${baseFonts}`,
    },
  });
});
