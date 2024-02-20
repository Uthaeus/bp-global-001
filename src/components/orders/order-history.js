import { useState } from "react";

import OrderChartHeader from "./order-chart-header";
import OrderItem from "./order-item";

import { sampleOrders } from "../../store/DUMMY_DATA";

function OrderHistory() {
    const [activeOrders, setActiveOrders] = useState(sampleOrders.filter(order => order.orderStatus === "Shipped"));
    const [deliveredOrders, setDeliveredOrders] = useState(sampleOrders.filter(order => order.orderStatus === "Delivered"));

    return (
        <div className="orders-container">
            <h1 className="orders-title">Order History</h1>

            <div className="orders-chart-container">
                <OrderChartHeader />
                <p className="orders-chart-title">Active Orders</p>
                {activeOrders.map(order => (
                    <OrderItem key={order.orderNumber} order={order} />
                ))}

                <p className="orders-chart-title">Delivered Orders</p>
                {deliveredOrders.map(order => (
                    <OrderItem key={order.orderNumber} order={order} />
                ))}
                
            </div>
        </div>
    );
}

export default OrderHistory;