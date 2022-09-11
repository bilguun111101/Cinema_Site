export const styles = {
    logOutBtn: {
      position: "fixed",
      color: "#FFF",
      top: "7em",
      right: "3em"
    },
    profilePage: {
      position: "relative",
      width: "100vw",
      display: "flex",
      justifyContent: "center"
    },
    profileSection: (theme) => ({
      boxShadow: "0 0 10px red",
      backgroundColor: "#000",
      marginTop: "4em",
      width: "70%",
      [theme.breakpoints.down("lg")]: {
        width: "80%",
      },
      [theme.breakpoints.down("md")]: {
        width: "87%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "95%",
      }
    }),
    img: {
      borderRadius: "50%",
      border: "3px solid red",
      width: "90px",
      height: "90px",
      marginTop: "1em"
    },
    imformation_profile: {
      height: "33vh",
      width: "100%",
      position: "relative",
      display: "flex",
      justifyContent: "flex-end",
      backgroundColor: "#000",
      alignItems: "center",
      flexDirection: "column"
    },
    imformation_personal: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#FFF"
    },
    phoneAndEmail: {
      display: "flex",
      alignItems: "center",
      color: "#FFF",
      marginTop: "1em"
    }
  }