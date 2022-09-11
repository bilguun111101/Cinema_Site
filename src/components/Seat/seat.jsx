import Chair from './Chair/chair';
import { Box } from "@mui/material"

const styles = {
    seatsSection: {
        width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", height: "80vh", paddingBottom: "5em" 
    },

}

const Seat = () => {
    let arr = [], i = 1;
    while (i <= 20) {
        arr.push(i);
    }
    return(
        <Box sx={styles.seatsSection}>
            <Box 
            >
                {arr.map((el, index) => <Chair key={index} num={el}/>)}
            </Box>
        </Box>
    )
}

export default Seat;