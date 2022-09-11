import PerMovie from "./perMovie/moviePer";
import { useMemo, useState } from "react";
import { useEffect } from "react";
import { useGetDocLogIn } from "../Firebase/LogIn/LogIn";
import { Button, Grid, Box, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { useArrayVarContext } from "../../context";
import { Container } from "@mui/material";

let i;

const Products = () => {
  const styles = {
    gridSection: {
      width: "100vw",
      marginTop: "1rem",
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
  const [bool, setBool] = useState(false);
  const { search } = useArrayVarContext();
  let data = [];
  let saveData = useGetDocLogIn("movies");

  for (i = 0; i < Math.floor(saveData.length / 2); i++) data.push(saveData[i]);

  const getDataMovie = () => {
    setBool(!bool);
  };

  useEffect(() => {
    getDataMovie();
  }, []);

  return (
    <Container
      container
      justify="center"
      maxWidth="primary.ContaierWidth"
      sx={styles.gridSection}
    >
      <Grid justify="center" container sx={{ width: "100%" }}>
        {!bool ? (
          <Container sx={styles.loading}>
            <CircularProgress color="error" />
          </Container>
        ) : (
          <Container
            component="div"
            container
            display="flex"
            sx={{ justifyContent: "center", width: "100%" }}
          >
            <Grid container spacing={4} justifyContent="center">
              {data
                .filter((el) => {
                  if (search === "") return el;
                  else if (
                    el.data.name.toLowerCase().includes(search) ||
                    el.data.name.toLowerCase().includes(search.toLowerCase())
                  )
                    return el;
                })
                .map((el, ind) => (
                  <PerMovie data={el.data} index={ind} key={ind} />
                ))}
            </Grid>
          </Container>
        )}
      </Grid>
    </Container>
  );
};

export default Products;
