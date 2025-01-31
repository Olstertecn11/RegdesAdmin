import Login from "../pages/common/Login";
import Home from "../pages/admin/Home";
import ParcelRegister from '../pages/admin/ParcelRegister';
import SowingRegister from "../pages/admin/SowingRegister";
import GrapeRegister from "../pages/admin/GrapeRegister";
import GrapeDisease from "../pages/admin/GrapeDisease";
import Production from "../pages/admin/Production";
import SickSowing from "../pages/admin/SickSowing";
import ViewParcel from '../pages/admin/ViewParcel';
import ViewGrapes from '../pages/admin/ViewGrapes';
import ViewSowing from '../pages/admin/ViewSowing';
import Register from "../pages/common/Register";


const userRoutes = [
  { path: "/login", component: Login, public: true },
  { path: "/register", component: Register, public: true },
  { path: "/", component: Login, public: true },
  { path: "/Home", component: Home },
  { path: "/admin/grapes-new", component: GrapeRegister },
  { path: "/admin/parcel-new", component: ParcelRegister },
  { path: "/admin/sowing-new", component: SowingRegister },
  { path: "/admin/grape-disease-new", component: GrapeDisease },
  { path: "/admin/production", component: Production },
  { path: "/admin/sick-sowking", component: SickSowing },


  { path: "/admin/view-parcels", component: ViewParcel },
  { path: "/admin/view-grapes", component: ViewGrapes },
  { path: "/admin/view-sowing", component: ViewSowing },
];

export default userRoutes;
