import { useArrayVarContext } from "../../context";
import CartPer from "./cartPer/cartPer";
import { useEffect, useState } from "react";
import { useGetDocLogIn } from "../Firebase/LogIn/LogIn";
import { Button, Grid, Box, Typography, CircularProgress } from "@mui/material";
import { Container } from "@mui/material";

// History of costumers
let i;

const ShoppingCart = () => {
  const styles = {
    gridSection: {
      width: "100vw",
      marginTop: "2rem",
      paddingBottom: "4em"
    },
    loading: {
      width: "100vw",
      heigth: "70vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  const [cartArray, setCartArray] = useState([]);
  const { user } = useArrayVarContext();
  const { search } = useArrayVarContext();
  const movies = useGetDocLogIn("ticket");

  const [bool, setBool] = useState(false);

  const getDataMovie = () => {
    setBool(!bool);
  };

  useEffect(() => {
    getDataMovie();
  }, []);

  useEffect(() => {
    movies.forEach((doc) => {
      if (
        doc.person_name === user.name &&
        doc.person_phone === user.phoneNumber &&
        doc.person_email === user.email
      )
        setCartArray((old) => [...old, doc]);
    });
  }, [movies]);

  return (
    <Container container justify="center" sx={styles.gridSection}>
      <Grid justify="center" container sx={{ width: "100%" }}>
        {!bool ? (
          <Container component="div" sx={styles.loading}>
            <CircularProgress color="error" />
          </Container>
        ) : (
          <Container
            component="div"
            container
            display="flex"
            sx={{ justifyContent: "center", width: "100%" }}
          >
            <Grid container
              spacing={5}
             justifyContent="center">
              {cartArray
                .filter((el) => {
                  if (search === "") return el;
                  else if (
                    el.name.toLowerCase().includes(search) ||
                    el.name.toLowerCase().includes(search.toLowerCase())
                  )
                    return el;
                })
                .map((data, ind) => (
                  <CartPer key={ind} data={data} />
                ))}
            </Grid>
          </Container>
        )}
      </Grid>
    </Container>
  );
};

export default ShoppingCart;
