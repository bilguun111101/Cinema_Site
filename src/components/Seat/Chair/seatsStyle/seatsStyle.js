export const styles = {
    seatSection:{
        width: "100vw",
        height: "auto",
        paddingTop: "1em",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "5em",
    },
    seatSectionWithin: (theme) => ({
        display: "flex",
        flexWrap: "wrap",
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
        height: "auto",
        gap: "7px",
        [theme.breakpoints.down("lg")]: {
            width: "60%"
        },
        [theme.breakpoints.down("md")]: {
            width: "70%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%"
        }
    }),
    screen: {
        width: "40%", height: "60%", backgroundColor: "#FFF", boxShadow: "0 0 10px #FFF", borderTopLeftRadius: "10rem", borderTopRightRadius: "10rem" 
    },
    continueLocation: {
        position: "absolute",
        right: "1em",
        bottom: "5em",
    },
    continueBtn: {
        color: "#FFF",
        fontSize: "2rem"
    },
    screenSection: { 
        width: "100vw", height: "10vh", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2em" 
    }
}