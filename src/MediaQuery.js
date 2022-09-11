import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const myDiv = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
        backgroundColor: theme.palette.primary.light,
    },
    [theme.breakpoints.up("md")]: {
        backgroundColor: theme.palette.secondary.light,
    }
}))

export const MediaQuery = () => {
    return(
        <MyDiv>
            <Typography>down(md): red</Typography>
            <Typography>up(md): blue</Typography>
            <Typography>up(lg): green</Typography>
        </MyDiv>
    )
}