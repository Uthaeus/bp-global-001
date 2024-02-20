
import OrderChartHeader from "./order-chart-header";
import OrderItem from "./order-item";

function OrderHistory() {
    return (
        <div className="orders-container">
            <h1 className="orders-title">Order History</h1>

            <div className="orders-chart-container">
                <OrderChartHeader />
                
            </div>
        </div>
    );
}

export default OrderHistory;