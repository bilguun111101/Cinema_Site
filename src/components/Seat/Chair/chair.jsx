import { useEffect, useState } from 'react';
import ChairPer from './chairPer';
import { useArrayVarContext } from '../../../context';
import { collection, setDoc, doc } from 'firebase/firestore';
import { db } from '../../../fireStore';
import { useNavigate } from 'react-router-dom';
import { useGetDocLogIn } from '../../Firebase/LogIn/LogIn';
import { Box, Container, Button, Grid, Icon } from "@mui/material"
import "https://kit.fontawesome.com/a076d05399.js";
import { styles } from "./seatsStyle/seatsStyle"

const Chair = props => {

    // some hoooks
    let arr = [], [array, setArray] = useState([]);
    const { filmVar, setFilmVar } = useArrayVarContext();
    const { user } = useArrayVarContext();
    const [arrTicket, setArrTicket] = useState([]);
    const { bool, setBool } = useArrayVarContext();
    const { pathId } = useArrayVarContext();
    const navigate = useNavigate();
    const movies = useGetDocLogIn("ticket");

    // ------------------------------------------------------

    const HandlePushCart = () => {
        let adult = !isNaN(filmVar.inputObj.adult) ? +filmVar.inputObj.adult : 0
        let child = !isNaN(filmVar.inputObj.child) ? +filmVar.inputObj.child : 0
        const lenght = adult + child;
        if(lenght !== array.length) alert('Суудлын тоогоо харгалзан оруулна уу!!!');
        else {
            setDoc(doc(collection(db, "ticket")), {
                movie_name: filmVar.name,
                date: filmVar.inputObj.date,
                costumer: filmVar.inputObj,
                movie_image: filmVar.image,
                person_name: user.name,
                person_email: user.email,
                person_phone: user.phoneNumber,
                seat: array
            })
            navigate(`/${pathId.home}`);
            setBool(bool.map((el, index) => index === 0 ? !el : el = false))
        }
    };

    useEffect(() => {
        if(!movies) return;
        movies.forEach(doc => {
            if(doc.movie_name === filmVar.name && doc.date === filmVar.inputObj.date) {
                let seatArray = doc.seat;
                setArrTicket(old => [...old, ...seatArray]);
            }
        })
    }, [movies]);

    for(let i = 1; i <= 64; i++) arr.push(i);

    return(
        <Box 
            sx={styles.seatSection}
        >
            <Grid
                sx={styles.seatSectionWithin}
            >
                {arr.map(el => {
                    const isCheck = arrTicket.includes(el);
                    return <ChairPer 
                                key={el} 
                                num={el} 
                                blackSeat={isCheck} 
                                arr={setArray} 
                                array={array}
                            />
                })}
            </Grid>
            <Box 
                sx={styles.screenSection}
            >
                <Box sx={styles.screen}></Box>
            </Box>
            <Button  
                sx={styles.continueLocation}
                onClick={HandlePushCart}
            >
                <Icon sx={styles.continueBtn} className="fas fa-arrow-right" />
            </Button>
        </Box>
    )
}

export default Chair;