
import OrderChartHeader from "./order-chart-header";
import OrderItem from "./order-item";

function CurrentOrders() {
    return (
        <div className="orders-container">
            <h1 className="orders-title">Current Orders</h1>

            <OrderChartHeader />
        </div>
    );
}

export default CurrentOrders;