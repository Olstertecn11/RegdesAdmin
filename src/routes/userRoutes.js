import Login from "../pages/common/Login";
import Home from "../pages/admin/Home";
import ParcelRegister from '../pages/admin/ParcelRegister';
import SowingRegister from "../pages/admin/SowingRegister";
import GrapeRegister from "../pages/admin/GrapeRegister";
import GrapeDisease from "../pages/admin/GrapeDisease";
import Production from "../pages/admin/Production";
import SickSowing from "../pages/admin/SickSowing";


const userRoutes = [
  { path: "/login", component: Login, public: true },
  { path: "/", component: Login },
  { path: "/Home", component: Home },
  { path: "/admin/grapes-new", component: GrapeRegister },
  { path: "/admin/parcel-new", component: ParcelRegister },
  { path: "/admin/sowing-new", component: SowingRegister },
  { path: "/admin/grape-disease-new", component: GrapeDisease },
  { path: "/admin/production", component: Production },
  { path: "/admin/sick-sowking", component: SickSowing },
];

export default userRoutes;
