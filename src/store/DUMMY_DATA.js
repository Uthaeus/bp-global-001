
export const sampleOrders = [
    {
        poNumber: "PO123",
        orderNumber: "ORD456",
        orderedDate: "2022-01-15",
        origin: "New York",
        destination: "Los Angeles",
        orderStatus: "Shipped",
        appointmentDateTime: "2022-02-01 10:00 AM",
        shipDate: "2022-01-20",
        carrier: "ABC Shipping",
        lastLocation: "Warehouse A"
    },
    {
        poNumber: "PO223",
        orderNumber: "ORD457",
        orderedDate: "2022-01-16",
        origin: "Bangkok",
        destination: "Tokyo",
        orderStatus: "Shipped",
        appointmentDateTime: "2022-02-01 10:00 AM",
        shipDate: "2022-01-21",
        carrier: "ABC Shipping",
        lastLocation: "Warehouse B"
    },
    {
        poNumber: "PO323",
        orderNumber: "ORD458",
        orderedDate: "2022-01-17",
        origin: "London",
        destination: "Paris",
        orderStatus: "Delivered",
        appointmentDateTime: "2022-02-01 10:00 AM",
        shipDate: "2022-01-22",
        carrier: "ABC Shipping",
        lastLocation: "Warehouse C"
    },
    {
        poNumber: "PO423",
        orderNumber: "ORD459",
        orderedDate: "2022-01-18",
        origin: "Sydney",
        destination: "Melbourne",
        orderStatus: "Delivered",
        appointmentDateTime: "2022-02-01 10:00 AM",
        shipDate: "2022-01-23",
        carrier: "ABC Shipping",
        lastLocation: "Warehouse D"
    },
    {
        poNumber: "PO523",
        orderNumber: "ORD460",
        orderedDate: "2022-01-19",
        origin: "Melbourne",
        destination: "Sydney",
        orderStatus: "Delivered",
        appointmentDateTime: "2022-02-01 10:00 AM",
        shipDate: "2022-01-24",
        carrier: "ABC Shipping",
        lastLocation: "Warehouse E"
    }
];

export const sampleUsers = [
    {
        username: "Steve",
        password: "password",
        orders: steveOrders,
        billingAddress: {
            street: "123 Main St",
            city: "New York",
            state: "NY",
            zip: "10001",
            country: "USA"
        }
    },
    {
        username: "John",
        password: "password",
        orders: johnOrders,
        billingAddress: {
            street: "456 Main St",
            city: "New York",
            state: "NY",
            zip: "10001",
            country: "USA"
        }
    },
    {
        username: "Jane",
        password: "password",
        orders: janeOrders,
        billingAddress: {
            street: "789 Main St",
            city: "New York",
            state: "NY",
            zip: "10001",
            country: "USA"
        }
    },
    {
        username: "Admin",
        password: "password",
    }
]
