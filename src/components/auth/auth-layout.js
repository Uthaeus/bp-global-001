import { Outlet } from "react-router";

import MainNavigation from "../main-navigation";
import MainFooter from "../main-footer";
import Copyright from "../copyright";

function AuthLayout() {

    return (
        <div className="auth-layout">
            <MainNavigation />
            <Outlet />
            <MainFooter />
            <Copyright />
        </div>
    );
}

export default AuthLayout;