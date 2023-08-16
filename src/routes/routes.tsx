import { Navigate, useRoutes } from "react-router-dom";
import Mainpage from "../Pages/Mainpage";
import Navbar from "../Pages/Components/Navbar";
import ProductDetail from "../Pages/MainPage/ProductDetail";

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <Mainpage />,
        },
        {
            path: "Main",
            element: <Navbar />,
            children: [
                {
                    index: true,
                    path: "Details",
                    element: <ProductDetail />,
                },
            ]
            
        },
        {
            path: "Details2",
            element: <ProductDetail />,
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}
