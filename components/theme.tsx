import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#032741"
    },
    secondary: {
      main: "#ff890b"
    },
    error: {
      main: "#e54848"
    },
    background: {
      default: "#fff"
    }
  }
});

export default theme;
