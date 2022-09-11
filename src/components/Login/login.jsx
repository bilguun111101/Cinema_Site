import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useArrayVarContext } from '../../context';
import { useGetDocLogIn } from '../Firebase/LogIn/LogIn';
import { Box, Card, CardMedia, Button, Container, Typography, TextField, Paper } from "@mui/material"
import { v4 as uuidv4 } from "uuid"
import { styles } from "./LogInStyle"

const LogIn = () => {

    const phone = useRef(null);
    const pass = useRef(null);
    const path = "users"
    const { user, setUser } = useArrayVarContext();
    // const [userPerson, setUserPerson] = useState({});
    const { pathId, setPathID } = useArrayVarContext();
    const { bool, setBool } = useArrayVarContext();
    const { navbarBool, setNavbarBool } = useArrayVarContext();

    const navigate = useNavigate();

    // some functions
    
    const data = useGetDocLogIn(path);
    const CheckTheLog = async () => {
        console.log(phone.current.value)
        data.forEach(userPerson => {
            if(phone.current.value === userPerson.phone && pass.current.value === userPerson.pass) {
                setUser(
                    {
                        ...user, 
                        ["phoneNumber"]: userPerson.phone,
                        ["password"]: userPerson.pass,
                        ["name"]: userPerson.name,
                        ["email"]: userPerson.email
                    }
                )
                const oldMap = bool.map((el, index) => index === 0 ? !el : el = false)
                setBool(oldMap);
                setNavbarBool(!navbarBool);
                navigate("/" + pathId.home)
            }
        })
    }

    return(
        <Paper sx={styles.logInPage}>
            <Card sx={styles.cardSection}>
                <CardMedia 
                    src="https://pngimg.com/uploads/netflix/netflix_PNG15.png"
                    component="img" 
                    sx={styles.logo}
                />
                <Box sx={styles.logInSection}>
                    <Box>
                        <TextField 
                            label="phone number..." 
                            type="number" 
                            inputRef={phone} 
                            error
                            sx={styles.input}
                        />
                    </Box>
                    <Box 
                    >
                        <TextField 
                            error
                            label="password..."
                            type="password" 
                            inputRef={pass} 
                            sx={styles.input}
                        />
                    </Box>
                    <Button 
                        onClick={CheckTheLog} 
                        sx={styles.logInBtn}
                    >Log in</Button>
                </Box>
                <Link 
                    to="/signin" 
                >
                    <Button sx={{ color: "#FFF", position: "absolute", right: "1em", bottom: "1em" }}>Sign up</Button>
                </Link>
            </Card>
        </Paper>
    )
}

export default LogIn;