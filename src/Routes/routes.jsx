import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import User from "../components/User/User";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <App></App>,
            },
            {
                path: "/user",
                element: <User></User>,
            }
        ]
    },
]);

export default router;