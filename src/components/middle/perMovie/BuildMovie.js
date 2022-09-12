export const styles = {
  myButton: {
    "&:hover": {
      backgroundColor: "red",
      color: "#FFF",
    },
    backgroundColor: "orange",
    color: "black",
    zIndex: "-1",
  },
  orangeBtn: {
    backgroundColor: "#ff9800",
    width: "60%",
    color: "#FFF",
    fontSize: "80%",
    "&:hover": {
      opacity: "0.9",
    },
  },
  gridItem: (theme) => ({
    width: "20%",
    paddingLeft: "1rem",
    backgroundColor: "#000",
    [theme.breakpoints.down("lg")]: {
      width: "30%",
    },
    [theme.breakpoints.down("md")]: {
      width: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  }),
  name: (theme) => ({
    fontSize: "1.5rem",
    color: "#FFF",
    marginBottom: "1em",
    textShadow: "0 0 5px #FFF",
    [theme.breakpoints.down("lg")]: {
      fontSize: "150%",
    },
  }),
  cartSection: (theme) => ({
    padding: "1.5rem",
    width: "60%",
    [theme.breakpoints.down("lg")]: {
      width: "60%",
    },
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30%",
    },
  }),
};
