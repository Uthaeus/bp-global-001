import { Outlet } from "react-router";

import MainNavigation from "./main-navigation";
import MainFooter from "./main-footer";
import Copyright from "./copyright";

function MainLayout() {

    return (
        <div className="main-layout">
            <MainNavigation />
            <Outlet />
            <MainFooter />
            <Copyright />
        </div>
    );
}

export default MainLayout;