import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Products from "./components/middle/products";
// import movieData from "./moviesData.json";
import { ArrayVarProvider, useArrayVarContext } from "./context";
import Film from "./components/Film/film";
import Chair from "./components/Seat/Chair/chair";
import ShoppingCart from "./components/Cart/cart";
import LogIn from "./components/Login/login";
import SignIn from "./components/Signin/signin";
import User from "./components/User/user";

function App() {
  const { pathId } = useArrayVarContext();
  const { navbarBool } = useArrayVarContext();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      {navbarBool ? <Navbar /> : <></>}
      <div>
        <Routes>
          <Route path={"/" + pathId.user} element={<User />} />
          <Route path={"/" + pathId.home} element={<Products />} />
          <Route
            path={"/" + pathId.home + "/" + pathId.film}
            element={<Film />}
          />
          <Route
            path={"/" + pathId.home + "/" + pathId.film + "/" + pathId.chair}
            element={<Chair />}
          />
          <Route path={"/" + pathId.shoppingCart} element={<ShoppingCart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
