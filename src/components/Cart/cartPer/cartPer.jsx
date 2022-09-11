import { Grid, Box, Typography, CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import { styles } from "./BuildCartStyle"

const CartPer = (props) => {
  const data = props.data;
  const cost =
    (!isNaN(data.costumer.adult) ? +data.costumer.adult * 10 : 0) +
    (!isNaN(data.costumer.child) ? +data.costumer.child * 5 : 0);
  return (
    <Grid sx={styles.gridItem}>
      <Box sx={styles.border}>
        <CardMedia src={data.movie_image} component="img" />
        <Container sx={styles.name} component="h3">
          {data.movie_name}
        </Container>
        <Box>
          <Typography sx={styles.color}>{data.costumer.date}</Typography>
        </Box>
        <Typography>Суудал: {data.seat + ""}</Typography>
        <Typography component="div" display="flex" sx={styles.howManyPeople}>
          <Box sx={styles.color}>
            <Typography>Том хүн: {data.costumer.adult}</Typography>
            <Typography>Хүүхэд: {data.costumer.child}</Typography>
          </Box>
          <Typography sx={styles.color}>Үнэ: ${cost}</Typography>
        </Typography>
      </Box>
    </Grid>
  );
};

export default CartPer;
