import {
  defineSemanticTokens,
  defineTextStyles,
  defineTokens,
} from "@pandacss/dev";
import { mapKeys, mapValues } from "../src/utils";
import {
  purple,
  yellow,
  orange,
  blue,
  gray,
  grayDark,
  blueDark,
  orangeDark,
  yellowDark,
  purpleDark,
  tomato,
  tomatoDark,
  grass,
  grassDark,
  violet,
  violetDark,
} from "@radix-ui/colors";

function semanticColors<T extends object, K extends Record<keyof T, string>>(
  lightScale: T,
  darkScale: K,
) {
  return mapValues(lightScale, (_, key) => ({
    value: { base: lightScale[key], _dark: darkScale[key] },
  }));
}

function renameKeys<
  T extends Record<string, any>,
  Old extends string,
  New extends string,
>(obj: T, old: Old, knew: New) {
  return mapKeys(
    obj,
    (_, k) =>
      (k as string).replace(
        old,
        knew,
      ) as typeof k extends `${Old}${infer Digit extends number}`
        ? `${New}${Digit}`
        : never,
  );
}

const baseFonts =
  "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif";

export const tokens = defineTokens({
  spacing: {
    1: { value: "4px" },
    2: { value: "8px" },
    3: { value: "12px" },
    4: { value: "16px" },
    5: { value: "24px" },
    6: { value: "32px" },
    7: { value: "48px" },
    8: { value: "64px" },
    9: { value: "96px" },
  },
  fontSizes: {
    xs: { value: "0.75rem" },
    sm: { value: "0.875rem" },
    base: { value: "1rem" },
    lg: { value: "1.125rem" },
    xl: { value: "1.25rem" },
    "2xl": { value: "1.5rem" },
    "3xl": { value: "1.875rem" },
    "4xl": { value: "2.25rem" },
    "5xl": { value: "3rem" },
    "6xl": { value: "3.75rem" },
    "7xl": { value: "4.5rem" },
    "8xl": { value: "6rem" },
    "9xl": { value: "8rem" },
  },
  lineHeights: {
    xs: { value: "1rem" },
    sm: { value: "1.25rem" },
    base: { value: "1.5rem" },
    lg: { value: "1.75rem" },
    xl: { value: "1.75rem" },
    "2xl": { value: "2rem" },
    "3xl": { value: "2.25rem" },
    "4xl": { value: "2.5rem" },
    "5xl": { value: "4rem" },
    "6xl": { value: "4rem" },
    "7xl": { value: "5rem" },
    "8xl": { value: "6rem" },
    "9xl": { value: "8rem" },
  },
  radii: {
    sm: { value: "0.125rem" },
    base: { value: "0.25rem" },
    md: { value: "0.375rem" },
    lg: { value: "0.5rem" },
    xl: { value: "0.75rem" },
  },
  sizes: {
    pageWidth: { value: "min(80ch, 85dvw)" },
  },
});

export const semanticTokens = defineSemanticTokens({
  colors: {
    ...semanticColors(gray, grayDark),
    ...semanticColors(orange, orangeDark),
    ...semanticColors(blue, blueDark),
    ...semanticColors(violet, violetDark),
    ...semanticColors(yellow, yellowDark),
    ...semanticColors(purple, purpleDark),
    ...renameKeys(semanticColors(tomato, tomatoDark), "tomato", "red"),
    ...renameKeys(semanticColors(grass, grassDark), "grass", "green"),
    accent1: {
      value: {
        _redTheme: "{colors.red1}",
        _orangeTheme: "{colors.orange1}",
        _blueTheme: "{colors.blue1}",
        _violetTheme: "{colors.violet1}",
        _purpleTheme: "{colors.purple1}",
        _greenTheme: "{colors.green1}",
      },
    },
    accent2: {
      value: {
        _redTheme: "{colors.red2}",
        _orangeTheme: "{colors.orange2}",
        _blueTheme: "{colors.blue2}",
        _violetTheme: "{colors.violet2}",
        _purpleTheme: "{colors.purple2}",
        _greenTheme: "{colors.green2}",
      },
    },
    accent3: {
      value: {
        _redTheme: "{colors.red3}",
        _orangeTheme: "{colors.orange3}",
        _blueTheme: "{colors.blue3}",
        _violetTheme: "{colors.violet3}",
        _purpleTheme: "{colors.purple3}",
        _greenTheme: "{colors.green3}",
      },
    },
    accent4: {
      value: {
        _redTheme: "{colors.red4}",
        _orangeTheme: "{colors.orange4}",
        _blueTheme: "{colors.blue4}",
        _violetTheme: "{colors.violet4}",
        _purpleTheme: "{colors.purple4}",
        _greenTheme: "{colors.green4}",
      },
    },
    accent5: {
      value: {
        _redTheme: "{colors.red5}",
        _orangeTheme: "{colors.orange5}",
        _blueTheme: "{colors.blue5}",
        _violetTheme: "{colors.violet5}",
        _purpleTheme: "{colors.purple5}",
        _greenTheme: "{colors.green5}",
      },
    },
    accent6: {
      value: {
        _redTheme: "{colors.red6}",
        _orangeTheme: "{colors.orange6}",
        _blueTheme: "{colors.blue6}",
        _violetTheme: "{colors.violet6}",
        _purpleTheme: "{colors.purple6}",
        _greenTheme: "{colors.green6}",
      },
    },
    accent7: {
      value: {
        _redTheme: "{colors.red7}",
        _orangeTheme: "{colors.orange7}",
        _blueTheme: "{colors.blue7}",
        _violetTheme: "{colors.violet7}",
        _purpleTheme: "{colors.purple7}",
        _greenTheme: "{colors.green7}",
      },
    },
    accent8: {
      value: {
        _redTheme: "{colors.red8}",
        _orangeTheme: "{colors.orange8}",
        _blueTheme: "{colors.blue8}",
        _violetTheme: "{colors.violet8}",
        _purpleTheme: "{colors.purple8}",
        _greenTheme: "{colors.green8}",
      },
    },
    accent9: {
      value: {
        _redTheme: "{colors.red9}",
        _orangeTheme: "{colors.orange9}",
        _blueTheme: "{colors.blue9}",
        _violetTheme: "{colors.violet9}",
        _purpleTheme: "{colors.purple9}",
        _greenTheme: "{colors.green9}",
      },
    },
    accent10: {
      value: {
        _redTheme: "{colors.red10}",
        _orangeTheme: "{colors.orange10}",
        _blueTheme: "{colors.blue10}",
        _violetTheme: "{colors.violet10}",
        _purpleTheme: "{colors.purple10}",
        _greenTheme: "{colors.green10}",
      },
    },
    accent11: {
      value: {
        _redTheme: "{colors.red11}",
        _orangeTheme: "{colors.orange11}",
        _blueTheme: "{colors.blue11}",
        _violetTheme: "{colors.violet11}",
        _purpleTheme: "{colors.purple11}",
        _greenTheme: "{colors.green11}",
      },
    },
    accent12: {
      value: {
        _redTheme: "{colors.red12}",
        _orangeTheme: "{colors.orange12}",
        _blueTheme: "{colors.blue12}",
        _violetTheme: "{colors.violet12}",
        _purpleTheme: "{colors.purple12}",
        _greenTheme: "{colors.green12}",
      },
    },
  },
  fonts: {
    base: {
      value: {
        _spaceFont: `"Space Grotesk Variable",${baseFonts}`,
        _karlaFont: `"Karla Variable",${baseFonts}`,
        _interFont: `"Inter Variable",${baseFonts}`,
        _crimsonFont: `"Crimson Pro Variable",${baseFonts}`,
        _bitterFont: `"Bitter Variable",${baseFonts}`,
        _systemFont: `${baseFonts}`,
      },
    },
  },
});

export const textStyles = defineTextStyles({
  sm: {
    value: { fontSize: "{fontSizes.sm}", lineHeight: "{lineHeights.sm}" },
  },
  base: {
    value: {
      fontSize: "{fontSizes.base}",
      lineHeight: "{lineHeights.base}",
    },
  },
  lg: {
    value: { fontSize: "{fontSizes.lg}", lineHeight: "{lineHeights.lg}" },
  },
  xl: {
    value: { fontSize: "{fontSizes.xl}", lineHeight: "{lineHeights.xl}" },
  },
  "2xl": {
    value: { fontSize: "{fontSizes.2xl}", lineHeight: "{lineHeights.2xl}" },
  },
  "3xl": {
    value: { fontSize: "{fontSizes.3xl}", lineHeight: "{lineHeights.3xl}" },
  },
  "4xl": {
    value: { fontSize: "{fontSizes.4xl}", lineHeight: "{lineHeights.4xl}" },
  },
  "5xl": {
    value: { fontSize: "{fontSizes.5xl}", lineHeight: "{lineHeights.5xl}" },
  },
});
