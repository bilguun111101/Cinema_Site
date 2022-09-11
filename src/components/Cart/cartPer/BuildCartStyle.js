export const styles = {
    gridItem: (theme) => ({
      width: "25%",
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
    border: {
      border: "0.1px solid #FFF",
      padding: "1rem",
      borderRadius: "1rem"
    },
    name: {
      color: "red",
      padding: 0,
      textAlign: "center",
    },
    howManyPeople: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "1.2rem",
      textShadow: "0 0 2px red",
      padding: "0",
    },
    cost: {
      padding: "0",
      color: "#FFF",
    },
    color: {
      color: "#FFF"
    }
  };