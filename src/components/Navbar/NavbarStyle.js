export const styles = {
    navbarSection: (theme) => ({
      justifyContent: "space-between",
      padding: "1rem",
      display: "flex",
      position: "sticky",
      top: "0%",
      zIndex: 4,
      left: "0%",
      rigth: "0%",
      backgroundColor: "#000",
      alignItems: "center",
    }),
    btnsSection: (theme) => ({
      display: "flex",
      width: "50%",
    }),
    btn: (theme) => ({
      width: "30vw",
      display: "flex",
      justifyContent: "center",
      gap: "",
      [theme.breakpoints.down("md")]: {
        backgroundColor: "#000",
        // display: "flex",
        justifyContent: "space-around",
        position: "fixed",
        bottom: 0,
        width: "100vw",
        right: 0,
        left: 0,
      },
    }),
    logo: (theme) => ({
      width: 200,
      [theme.breakpoints.down("md")]: {
        width: 100,
      },
    }),
  };