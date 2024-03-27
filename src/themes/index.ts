import { createTheme } from "@mui/material/styles";

// assets
// import colors from '@public/assets/scss/_themes-vars.module.scss';
import colors from "@public/assets/scss/_themes-vars.module.scss";

// project imports

import themePalette from "./palette";
import themeTypography from "./typography";
import componentStyleOverrides from "./compStyleOverride";

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization: any) => {
  const color = colors;

  const themeOption = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.grey900,
    menuSelectedBack: color.primaryLight,
    divider: color.grey300,
    customization,
  };

  const themeOptions = {
    // direction: 'ltr',
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: "48px",
        padding: "16px",
        "@media (min-width: 600px)": {
          minHeight: "48px",
        },
      },
    },
    typography: themeTypography(themeOption),
  };

  const themes = createTheme(themeOptions);
  // const themes = createTheme();
  themes.components = componentStyleOverrides(themeOption);

  return themes;
};

export default theme;