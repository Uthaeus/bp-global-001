
import OrderChartHeader from "./order-chart-header";
import OrderItem from "./order-item";

function CurrentOrders() {
    return (
        <div className="orders-container">
            <h1>Current Orders</h1>

            <OrderChartHeader />
        </div>
    );
}

export default CurrentOrders;