import Login from "../pages/common/Login";
import Home from "../pages/admin/Home";
import Register from "../pages/common/Register";
import Churchs from "../pages/admin/Churchs";
import Misions from "../pages/admin/Misions";
import Clases from "../pages/admin/Clases";
import Usuarios from "../pages/admin/Usuarios";


const userRoutes = [
  { path: "/login", component: Login, public: true },
  { path: "/register", component: Register, public: true },
  { path: "/", component: Login, public: true },



  { path: "/Dashboard", component: Home },
  { path: "/admin/iglesias", component: Churchs },
  { path: "/admin/misiones", component: Misions },
  { path: "/admin/clases", component: Clases },
  { path: "/admin/usuarios", component: Usuarios },



];

export default userRoutes;
