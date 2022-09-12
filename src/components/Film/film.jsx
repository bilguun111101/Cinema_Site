import { useState } from "react";
import { useArrayVarContext } from "../../context";
import { Link, useNavigate } from "react-router-dom";
import { Box, CardMedia, Grid, Button, TextField } from "@mui/material";
import { styles } from "./FilmStyle";

// Movies ticket of seats

const Film = (props) => {
  // some hooks
  const { filmVar, setFilmVar } = useArrayVarContext();
  const [inputObj, setInputObj] = useState({});
  const { user, setUser } = useArrayVarContext();
  const navigate = useNavigate();
  const { bool, setBool } = useArrayVarContext();
  const { pathId } = useArrayVarContext();

  // handle input

  const btnHandle = () => {
    if (inputObj.adult === "" || inputObj.child === "") {
      alert("Мэдээлэл дутуу байна!!!");
      return;
    } else {
      let name = user.name,
        phone = user.phoneNumber;
      setInputObj({ ...inputObj, name, ["email"]: user.email });
      setFilmVar({ ...filmVar, ["userName"]: name });
      setFilmVar({ ...filmVar, ["userPhone"]: phone });
      setFilmVar({ ...filmVar, inputObj });
      setBool(
        bool.map((el, index) =>
          index === bool.length - 1 ? !el : (el = false)
        )
      );
      navigate("/" + pathId.home + "/" + pathId.film + "/" + pathId.chair);
    }
  };

  return (
    <Box sx={styles.filmProduct}>
      <Grid container sx={styles.filmGrid} spacing={3}>
        <Grid item sx={styles.gridItem}>
          <CardMedia
            sx={styles.filmTicketsImage}
            src={filmVar.image}
            component="img"
          />
        </Grid>
        <Grid item sx={styles.inputTicket}>
          <Box xs={styles.inputOfBox}>
            <TextField
              id="outlined-basic"
              label="Том хүн..."
              variant="outlined"
              type="number"
              sx={styles.input}
              onChange={(e) =>
                setInputObj({ ...inputObj, [e.target.name]: e.target.value })
              }
              name="adult"
              error
            />
          </Box>
          <Box xs={styles.inputOfBox}>
            <TextField
              id="outlined-basic"
              label="Хүүхэд..."
              variant="outlined"
              type="number"
              sx={styles.input}
              onChange={(e) =>
                setInputObj({ ...inputObj, [e.target.name]: e.target.value })
              }
              name="child"
              error
            />
          </Box>
          <Grid
            container
            justifyContent="center"
            spacing={1}
            sx={{ marginTop: "1em" }}
          >
            <Grid item>
              <Button
                sx={styles.dateBox}
                name="date"
                onClick={(e) =>
                  setInputObj({
                    ...inputObj,
                    [e.target.name]: e.target.textContent,
                  })
                }
              >
                3/22/2022 2AM
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={styles.dateBox}
                item
                name="date"
                onClick={(e) =>
                  setInputObj({
                    ...inputObj,
                    [e.target.name]: e.target.textContent,
                  })
                }
              >
                3/22/2022 4AM
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={styles.dateBox}
                item
                name="date"
                onClick={(e) => {
                  setInputObj({
                    ...inputObj,
                    [e.target.name]: e.target.textContent,
                  });
                }}
              >
                3/22/2022 5AM
              </Button>
            </Grid>
          </Grid>
          <Button
            sx={styles.continue}
            onClick={btnHandle}
            // className='film-product-contunue'
          >
            Үргэлжлүүлэх
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Film;
