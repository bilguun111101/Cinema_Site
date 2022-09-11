import { useState } from 'react';
import { Button } from "@mui/material"
import { styles } from "./ChairStyle"

const ChairPer = props => {
    const [bool, setBool] = useState(false);
    const handle = e => {
        setBool(!bool);
        const boolen = props.array.includes(props.num)
        if(!boolen) {
            props.arr(old => [...old, +props.num])
        }
        else {
            props.arr(old => old.filter(el => el !== +props.num));
        }
    };

    return(
        <Button
            onClick={handle} 
            disabled={props.blackSeat}
            sx={bool ? styles.redChair : props.blackSeat ? styles.blackChair : styles.chair}
        >
            {props.num}
        </Button>
    )
}

export default ChairPer;