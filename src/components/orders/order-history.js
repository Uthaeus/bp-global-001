import { useState, useEffect } from "react";

import OrderChartHeader from "./order-chart-header";
import OrderChartItem from "./order-chart-item";

import { sampleOrders } from "../../store/DUMMY_DATA";

function OrderHistory() {
    const [activeOrders, setActiveOrders] = useState([]);
    const [deliveredOrders, setDeliveredOrders] = useState([]);

    useEffect(() => {
        setActiveOrders(sampleOrders.filter(order => order.orderStatus !== "Shipped"));
        setDeliveredOrders(sampleOrders.filter(order => order.orderStatus === "Shipped"));
    }, []);

    return (
        <div className="orders-container">
            <h1 className="orders-title">Order History</h1>

            <div className="orders-chart-container">
                <OrderChartHeader />
                <p className="orders-chart-title">Active Orders</p>
                {activeOrders.map(order => (
                    <OrderChartItem key={order.orderNumber} order={order} />
                ))}

                <p className="orders-chart-title">Delivered Orders</p>
                {deliveredOrders.map(order => (
                    <OrderChartItem key={order.orderNumber} order={order} />
                ))}
                
            </div>
        </div>
    );
}

export default OrderHistory;