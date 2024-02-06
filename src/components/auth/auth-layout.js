import { Outlet } from "react-router";

import MainNavigation from "../main-navigation";
import MainFooter from "../main-footer";

function AuthLayout() {

    return (
        <div className="auth-layout">
            <MainNavigation />
            <Outlet />
            <MainFooter />
        </div>
    );
}

export default AuthLayout;