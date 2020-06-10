// Color Names generated from http://chir.ag/projects/name-that-color
export const Colors: Record<string, string> = {
  WHITE: "#FFFFFF",
  WHITE_SMOKE: "#F4F4F4",
  POLAR: "#E9FAF3",
  GEYSER: "#D3DEE3",
  GEYSER_LIGHT: "#D0D7DD",
  ATHENS_GRAY: "#EBEFF2",
  CONCRETE: "#F3F3F3",
  MYSTIC: "#E1E8ED",
  AQUA_HAZE: "#EEF2F5",
  GRAY_CHATEAU: "#A2A6A8",
  LIGHT_GREYISH_BLUE: "#B0BFCB",
  SUNGLOW: "#FFCB33",
  SOFT_ORANGE: "#f7c75b",
  PURE_ORANGE: "#ffb100",

  BLACK: "#000000",
  BLACK_PEARL: "#040627",
  SHARK: "#21282C",
  DEEP_SPACE: "#272E32",
  OUTER_SPACE: "#363E44",
  SLATE_GRAY: "#768896",
  PORCELAIN: "#EBEEF0",
  HIT_GRAY: "#A1ACB3",
  JUNGLE_MIST: "#BCCCD9",
  MERCURY: "#E8E8E8",
  MAKO: "#464D53",
  ALTO: "#DFDFDF",

  GREEN: "#29CCA3",
  JUNGLE_GREEN: "#24BA91",
  JUNGLE_GREEN_DARKER: "#30A481",
  RED: "#CE4257",
  PURPLE: "#6871EF",
  OXFORD_BLUE: "#2E3D49",
  FRENCH_PASS: "#BBE8FE",
  CADET_BLUE: "#A3B3BF",
  JAFFA: "#F2994A",
  BLUE_BAYOUX: "#4E5D78",
  MINT_TULIP: "#B5F1F1",
  AZURE_RADIANCE: "#0384FE",
  OCEAN_GREEN: "#36AB80",
  BUTTER_CUP: "#F7AF22",
  BLUE_CHARCOAL: "#23292E",
  TROUT: "#4C565E",
  JAFFA_DARK: "#EF7541",
  WATUSI: "#FFE0D2",
  GRAY: "#828282",
  ATHENS_GRAY_DARKER: "#F8F9FA",
};

export type Color = typeof Colors[keyof typeof Colors];
