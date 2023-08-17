import { Outlet } from "react-router-dom";
import Navigation from "../components/Shared/Navigation/Navigation";


const MainLayout = () => {
    return (
        <div className="w-[97%] mx-auto">
            <Navigation></Navigation>
            <Outlet></Outlet>       
        </div>
    );
};

export default MainLayout;