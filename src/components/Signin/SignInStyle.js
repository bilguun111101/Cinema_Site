export const styles = {
    signUpPage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, .3)",
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(https://www.logitheque.com/en/wp-content/uploads/sites/6/2019/07/netflix-image.jpg)`
    },
    cardSection: theme => ({
        backgroundColor: "rgb(0, 0, 0, .6)",
        flexDirection: "column",
        width: "40%",
        height: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(3px)",
        boxShadow: "0 0 10px rbga(0, 0, 0, .2)",
        [theme.breakpoints.down("md")]: {
            width: "60%"
        }
    }),
    signUp: theme => ({
        backgroundColor: "#000",
        flexDirection: "column",
        width: "40%",
        height: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        left: "-50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "10",
        borderRadius: "2em",
    }),
    signUpActive: theme => ({
        borderRadius: "5px",
        zIndex: "10",
        backgroundColor: "#000",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
    }),
    input: {
        marginBottom: "1em",
        input: { color: "#FFF" }, 
    },
    logo: theme => ({
        marginTop: "1em",
        width: "7%",
        marginBottom: "20px",
        [theme.breakpoints.down("lg")]: {
            width: "9%"
        },
        [theme.breakpoints.down("md")]: {
            width: "12%"
        }
    }),
    btn: {
        color: "#FFF",
    },
    blackInput: {
        color: "#FFF",
        backgroundColor: "#000"
    },
    logInBtn: {
        color: "#FFF",
        position: "absolute",
        right: "0.5em",
        bottom: "1em"
    }
}