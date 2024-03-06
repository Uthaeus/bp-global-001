import { Link } from "react-router-dom";

import OrderChartHeader from "../orders/order-chart-header";

export default function AccountHome() {

    return (
        <div className="account-home">
            <h1>Account Home</h1>

            <div className="account-home-info-container">
                <div className="account-home-info-left">
                    <p>User Information:</p>
                    <p className="account-home-info-item">User ID: <span className="account-home-info-item-span">123456789</span></p>
                    <p className="account-home-info-item">Email: <span className="account-home-info-item-span">jHwzU@example.com</span></p>
                </div>

                <div className="account-home-info-right">
                    <p>Billing & Shipping</p>
                    <p className="account-home-info-item">Billing Account #: <span className="account-home-info-item-span">123456789</span></p>
                    <p className="account-home-info-item">Shipping Address: <span className="account-home-info-item-span">123 Main Street Billings, MT 59101</span></p>
                </div>
            </div>

            <div className="account-home-orders-container">
                <p>Current Orders:</p>
                <OrderChartHeader />
                <p className="account-home-orders-item">Order #123456789</p>
                <p className="account-home-orders-item">Order #123456789</p>
                <p className="account-home-orders-item">Order #123456789</p>
            </div>

            <Link to='/account/profile'>Profile</Link>
        </div>
    );
}