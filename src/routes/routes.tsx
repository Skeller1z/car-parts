import { Navigate, useRoutes } from "react-router-dom";
import Mainpage from "../Pages/Mainpage";

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <Mainpage />,
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}
