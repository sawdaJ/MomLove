

export const colorTokens = {
  pink: {
    50: "#FFE6F5",
    100: "#FFCCEB",
    200: "#FF99D6",
    300: "#FF66C1",
    400: "#FF33AC",
    500: "#FF0097",
    600: "#CC007B",
    700: "#99005F",
    800: "#660043",
    900: "#330027",
  },
  purple: {
    50: "#F0E6FF",
    100: "#DACCEE",
    200: "#B49BDD",
    300: "#9C6BCC",
    400: "#843BBA",
    500: "#6C0BAA",
    600: "#57098B",
    700: "#42066C",
    800: "#2D044D",
    900: "#18022F",
  },
  lavender: {
    50: "#F4F5FE",
    100: "#E9EAFD",
    200: "#C9CAF9",
    300: "#A9AAF5",
    400: "#898BF1",
    500: "#696BEE",
    600: "#5355C3",
    700: "#3D3B98",
    800: "#27256D",
    900: "#111043",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.purple[200],
              main: colorTokens.purple[500],
              light: colorTokens.purple[800],
            },
            neutral: {
              dark: colorTokens.lavender[100],
              main: colorTokens.lavender[200],
              mediumMain: colorTokens.lavender[300],
              medium: colorTokens.lavender[400],
              light: colorTokens.lavender[700],
            },
            background: {
              default: colorTokens.lavender[900],
              alt: colorTokens.lavender[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.purple[700],
              main: colorTokens.purple[500],
              light: colorTokens.purple[50],
            },
            neutral: {
              dark: colorTokens.lavender[700],
              main: colorTokens.lavender[500],
              mediumMain: colorTokens.lavender[400],
              medium: colorTokens.lavender[300],
              light: colorTokens.lavender[50],
            },
            background: {
              default: colorTokens.lavender[50],
              alt: colorTokens.lavender[100],
            },
          }),
    },
    typography: {
      fontFamily: [
        "Montserrat",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Caveat", "cursive"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
