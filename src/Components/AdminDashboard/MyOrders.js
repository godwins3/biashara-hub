import React, { useEffect, useState } from 'react';
import './MyOrders.css'; // Import the CSS file

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('authToken');
    const email = localStorage.getItem('email');

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/bookings/getBooksByEmail`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${token}`,
                    },
                    body: JSON.stringify({ email }),
                });

                if (!response.ok) {
                    throw new Error('Error fetching orders');
                }

                const data = await response.json();
                console.log(data);
                setOrders(data);
            } catch (err) {
                setError(err.message || 'Error fetching orders');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
        // eslint-disable-next-line
    }, [email]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="orders-container">
            <h1>My Orders</h1>
            {orders.length > 0 ? (
                <ul className="orders-list">
                    {orders.map(order => (
                        <li key={order._id}>
                            <h3>Product ID: {order.productId}</h3>
                            <p><strong>Name:</strong> {order.userDetails.name}</p>
                            <p><strong>Contact:</strong> {order.userDetails.phone}</p>
                            <p><strong>Quantity:</strong> {order.quantity}</p>
                            <p><strong>Location:</strong> {order.location}</p>
                            <p><strong>Created At:</strong> {new Date(order.createdAt).toLocaleString()}</p>
                            <p><strong>Updated At:</strong> {new Date(order.updatedAt).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-orders">No orders found.</p>
            )}
        </div>
    );
};

export default MyOrders;
