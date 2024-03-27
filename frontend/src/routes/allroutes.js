import { Routes, Route } from "react-router-dom";
import LoginForm from "../LoginForm";
import Dashboard from "../Page/Dashboard";
const AllRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<LoginForm/>} / >

                <Route path={"/Dashboard"} element={<Dashboard/>} />
    </Routes >
  );
};

export default AllRoutes;