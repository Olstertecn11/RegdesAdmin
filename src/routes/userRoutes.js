import Login from "../pages/common/Login";
import Home from "../pages/admin/Home";
import Register from "../pages/common/Register";
import Churchs from "../pages/admin/Churchs";


const userRoutes = [
  { path: "/login", component: Login, public: true },
  { path: "/register", component: Register, public: true },
  { path: "/", component: Login, public: true },



  { path: "/Dashboard", component: Home },
  { path: "/admin/iglesias", component: Churchs },



];

export default userRoutes;
