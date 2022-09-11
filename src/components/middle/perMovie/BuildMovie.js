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
      width: "50%",
      fontSize: "1rem",
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
        width: "80%",
      },
    }),
    name: {
      fontSize: "1.5rem",
      color: "#FFF"
    }
  };