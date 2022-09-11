export const styles = {
    cardSection: theme => ({
        backgroundColor: "rgb(0, 0, 0, .6)",
        flexDirection: "column",
        width: "40%",
        height: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(3px)",
        boxShadow: "0 0 10px rbga(0, 0, 0, .2)",
        [theme.breakpoints.down("md")]: {
            width: "60%"
        }
    }),
    logInPage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, .3)",
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(https://www.logitheque.com/en/wp-content/uploads/sites/6/2019/07/netflix-image.jpg)`
    },
    logo: theme => ({
        width: "7%",
        marginBottom: "20px",
        [theme.breakpoints.down("lg")]: {
            width: "9%"
        },
        [theme.breakpoints.down("md")]: {
            width: "12%"
        }
    }),
    logInBtn: {
        color: "#FFF"
    },
    input: {
        color: "#FFF",
        input: { color: "#FFF" }, 
        width: "100%",
        marginBottom: "1em"
    },
    logInSection: {
        flexDirection: "column",
        display: "flex",
        alignItems: "center"
    }
}