
function OrderItem({ order }) {
    return (
        <div className="order-item">
            <p className="order-item-item">{order.poNumber}</p>
            <p className="order-item-item">{order.orderNumber}</p>
            <p className="order-item-item">{order.orderedDate}</p>
            <p className="order-item-item">{order.origin}</p>
            <p className="order-item-item">{order.destination}</p>
            <p className="order-item-item">{order.orderStatus}</p>
            <p className="order-item-item">{order.appointmentDateTime}</p>
            <p className="order-item-item">{order.shipDate}</p>
            <p className="order-item-item">{order.carrier}</p>
            <p className="order-item-item">{order.lastLocation}</p>
        </div>
    );
}

export default OrderItem;