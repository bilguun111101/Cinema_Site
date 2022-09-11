import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      fontSize: "2rem",
      white: "#FFF",
      minWidth: "300px",
      maxWidth: "400px",
      ContainerWidth: 'sm'
    },
  },
});

export const CustomTheme = (props) => {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
