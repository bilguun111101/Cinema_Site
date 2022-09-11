import { useNavigate } from "react-router-dom";
import { useArrayVarContext } from "../../../context";
import { Button, Card, Box, Grid, Typography, CardMedia } from "@mui/material";
import { styles } from "./BuildMovie"

const PerMovie = (props) => {
  const data = props.data;
  const navigate = useNavigate();
  const { setFilmVar } = useArrayVarContext();
  const { pathId } = useArrayVarContext();
  const { bool, setBool } = useArrayVarContext();

  const handleFilm = (e) => {
    setFilmVar(data);
    const oldMap = bool.map((el, index) => (index === 3 ? !el : (el = false)));
    setBool(oldMap);
    navigate(pathId.film);
  };

  return (
    <Grid item spacing={2} sx={styles.gridItem}>
      <Card padding={1.5} sx={{ minWidth: 200 }}>
        <Box
          sx={{ backgroundColor: "primary.main" }}
        >
          <CardMedia src={data.image} alt="" component="img" />
          <Typography component="h2" sx={styles.name}>
            {data.name}
          </Typography>
          <Box display="flex" sx={{ justifyContent: "space-between" }}>
            <Typography />
            <Button
              sx={styles.orangeBtn}
              variant="contained"
              onClick={handleFilm}
            >
              Захиалах
            </Button>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

export default PerMovie;
