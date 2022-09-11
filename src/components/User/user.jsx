import { useArrayVarContext } from "../../context";
import { useNavigate } from "react-router-dom";
import "https://kit.fontawesome.com/a076d05399.js";
import { Box, CardMedia, Card, Button, Typography } from "@mui/material";
import { Container } from "@mui/material";
import { styles } from "./UserStyle"

const User = () => {
  const { user, setUser, navbarBool, setNavbarBool } = useArrayVarContext();
  const navigate = useNavigate();
  const logOut = () => {
    setNavbarBool(!navbarBool);
    setUser({});
    navigate("/");
  };
  return (
    <Box sx={styles.profilePage} 
      >
      <Button sx={styles.logOutBtn}  
        onClick={logOut}>
        <i className="fas fa-sign-out-alt"></i> log out
      </Button>
      <Card sx={styles.profileSection} 
        >
        <Card 
          sx={styles.imformation_profile}
        >
          <CardMedia
            src="https://images-na.ssl-images-amazon.com/images/I/61N9sT4XIaL.jpg"
            component="img"
            sx={styles.img}
            alt=""
          />
          <Typography variant="h4" sx={styles.phoneAndEmail}>{user.name}</Typography>
        </Card>
        <Container 
        >
          <Box 
            sx={styles.imformation_profile}
          >
            <Box sx={styles.phoneAndEmail}>
              <i className="fas fa-phone" style={{ fontSize: "1.5em" }}/>
              <Container component="h3">{user.phoneNumber}</Container>
            </Box>
            <Box sx={styles.phoneAndEmail}>
              <i className="fas fa-envelope" style={{ fontSize: "1.5em" }} />
              <Container component="h3">{user.email}</Container>
            </Box>
          </Box>
        </Container>
      </Card>
    </Box>
  );
};

export default User;
