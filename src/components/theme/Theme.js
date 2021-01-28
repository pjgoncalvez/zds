import { ThemeProvider } from "styled-components";
import { colours, sizes, textStyles } from "./index";
import FontFaces from "./fontfaces";

const theme = {
  textStyles: {
    ...textStyles,
  },
  colours: {
    ...colours,
  },
  dimensions: {
    baseUnit: "8px",
    small: "16px",
    medium: "32px",
    large: "48px",
  },
  sizes: {
    ...sizes,
  },
};


console.log("🎨  theme specs: \n" + JSON.stringify(theme, null, 2));

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <FontFaces/>
    {children}
  </ThemeProvider>
);

export default Theme;