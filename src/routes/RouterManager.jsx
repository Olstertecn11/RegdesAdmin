import { BrowserRouter, Route, Routes } from "react-router-dom";
import userRoutes from "./userRoutes";
import Layout from "../components/common/Layout";
import NotFound from "../pages/common/NotFound";




const RouterManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        {userRoutes.map((entry) => (
          <Route
            key={entry.path}
            path={entry.path}
            element={entry.public ? <entry.component /> : <Layout Page={entry.component} />}
          />
        ))}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};



export default RouterManager;
