import { Outlet } from "react-router";

import MainNavigation from "../main-navigation";
import AccountSidebar from "./account-sidebar";

export default function AccountLayout() {
    return (
        <div className="account-layout">
            <MainNavigation />

            <div className="account-layout-container">
                <AccountSidebar />
                <Outlet />
            </div>
        </div>
    );
}