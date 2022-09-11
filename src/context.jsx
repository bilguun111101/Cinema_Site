import { useEffect, createContext, useContext, useState } from "react";
// import NavbarData from "./navbarData.json"
import { v4 as uuidv4 } from "uuid";

const ArrayContextAndVar = createContext();

export const ArrayVarProvider = (props) => {
  let objPath = {
    home: `${uuidv4()}${uuidv4()}${uuidv4()}/home`,
    film: `${uuidv4()}${uuidv4()}${uuidv4()}/film`,
    chair: `${uuidv4()}${uuidv4()}${uuidv4()}/chair`,
    user: `${uuidv4()}${uuidv4()}${uuidv4()}/user`,
    shoppingCart: `${uuidv4()}${uuidv4()}${uuidv4()}/shoppingCart`,
  };
  const { children } = props;
  const [filmVar, setFilmVar] = useState({});
  // const [cartArray, setCartArray] = useState([]);
  const [navbarBool, setNavbarBool] = useState(false);

  const boolArray = Array.from(5).fill(false);

  // navbar's pages style of element
  const [bool, setBool] = useState(boolArray);
  // ------------

  // user's imformation
  const [user, setUser] = useState({});
  // --------------------

  const [pathId, setPathId] = useState(objPath);
  // console.log(pathId);

  // value of search
  const [search, setSearch] = useState("");

  return (
    <ArrayContextAndVar.Provider
      value={{
        filmVar,
        setFilmVar,
        bool,
        setBool,
        user,
        setUser,
        pathId,
        setPathId,
        navbarBool,
        setNavbarBool,
        search,
        setSearch,
      }}
    >
      {children}
    </ArrayContextAndVar.Provider>
  );
};

export const useArrayVarContext = () => useContext(ArrayContextAndVar);
