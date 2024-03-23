import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import User from "../Pages/User/User";
 import ProductList from "../Components/listagemProducts";
import Login from "../Pages/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, //Login
  },
  {
    path: "/cadastro", //Cadastro pro login
    element: <User />,
  },
  {
    path: "/login", // pagina com os produtos
    element: <Login />,
  },
  {
    path: "/produto",
    element: <ProductList />,
  },
]);

export default router;
