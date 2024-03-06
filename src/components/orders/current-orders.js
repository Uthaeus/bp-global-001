import { useState } from "react";

import OrderChartHeader from "./order-chart-header";
import OrderItem from "./order-chart-item";

import { sampleOrders } from "../../store/DUMMY_DATA";

function CurrentOrders() {
    const [orders, setOrders] = useState(sampleOrders.filter(order => order.orderStatus === "Shipped"));

    return (
        <div className="orders-container">
            <h1 className="orders-title">Current Orders</h1>

            <div className="orders-chart-container">
                <OrderChartHeader />
                {orders.map(order => (
                    <OrderItem key={order.orderNumber} order={order} />
                ))}
            </div>
        </div>
    );
}

export default CurrentOrders;