import { Outlet } from "react-router";

import MainNavigation from "./main-navigation";
import MainFooter from "./main-footer";

function MainLayout() {

    return (
        <div className="main-layout">
            <MainNavigation />
            <Outlet />
            <MainFooter />
        </div>
    );
}

export default MainLayout;