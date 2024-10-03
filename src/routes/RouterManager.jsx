import { BrowserRouter, Route, Routes } from "react-router-dom";
import userRoutes from "./userRoutes";
import Layout from "../components/common/Layout";




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
      </Routes>
    </BrowserRouter>
  );
};



export default RouterManager;
