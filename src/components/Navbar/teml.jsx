import { Link, useNavigate } from "react-router-dom";
import "https://kit.fontawesome.com/a076d05399.js";
import { Badge, Button, Icon } from "@mui/material";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";

const styles = {
  Btn: {
    fontSize: "1.5em",
    borderBottom: "5px solid #000",
  },
  redBtn: {
    fontSize: "1.5em",
    borderBottom: "5px solid red",
  },
  shopping: {
    color: "#FFF"
  }
};

const Teml = (props) => {
  const bool = props.bool;
  const setBool = props.setBool;
  const navigation = useNavigate();
  // const [boolfa, setBoolFa] = useState(false);

  console.log(props.name.name)

  const change = () => {
    setBool((old) => old.map((el) => (el = false)));
    setBool((old) => old.map((el, index) => index === props.index && !el));
    navigation(`/${props.name.path}`);
  };

  return (
    <Button
      sx={bool[props.index] ? styles.redBtn : styles.Btn}
      onClick={() => change(props.index)}
    >
      <Link to={props.name.path}>
        <Icon className={`fas fa-${props.name.name}`} sx={styles.shopping}/>
      </Link>
    </Button>
  );
};

export default Teml;
