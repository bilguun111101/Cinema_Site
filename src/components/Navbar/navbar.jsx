import { Link } from "react-router-dom";
import "https://kit.fontawesome.com/a076d05399.js";
import Teml from "./teml";
import { useArrayVarContext } from "../../context";
import { Toolbar, TextField, CardMedia, Box } from "@mui/material";
import { Container } from "@mui/system";
import { styles } from "./NavbarStyle"

const Navbar = () => {

  const { pathId } = useArrayVarContext();
  const navbar = [
    { path: pathId.home, name: "home", id: 1 },
    { path: pathId.shoppingCart, name: "shopping-cart", id: 2 },
    { path: pathId.user, name: "user", id: 3 },
    { path: pathId.film, name: "film", id: 4 },
    { path: pathId.chair, name: "chair", id: 5 },
  ];

  const { bool, setBool } = useArrayVarContext();
  const { navbarBool, setNavbarBool } = useArrayVarContext();
  const { search, setSearch } = useArrayVarContext();
  const boolArray = Array.from(navbar).fill(false);
  const handleBool = () => setNavbarBool(!navbarBool);

  return (
    <Container component="div" sx={styles.navbarSection} spacing={1}>
      <Link to="/" onClick={handleBool}>
        <CardMedia
          component="img"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          sx={styles.logo}
        />
      </Link>
      <Box sx={styles.btnsSection}>
        <Box component="div" sx={styles.btn}>
          {navbar.map(
            (el, index) =>
              el.name !== "chair" &&
              el.name !== "film" && (
                <Teml
                  name={el}
                  key={el.id}
                  index={index}
                  bool={bool}
                  setBool={setBool}
                />
              )
          )}
        </Box>
        <TextField
          label={"search movie..."}
          sx={{ input: { color: "#fff" }, width: "80%" }}
          error
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        ></TextField>
      </Box>
    </Container>
  );
};

export default Navbar;
