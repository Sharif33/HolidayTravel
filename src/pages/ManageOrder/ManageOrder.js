import React, { useEffect, useState } from 'react';

const ManageOrder = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://gentle-taiga-36884.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    // DELETE order
    const handleDeleteOrders = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://gentle-taiga-36884.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Canceled successfully');
                        console.log(data);
                        const remainingOrders = orders.filter(order => order._id !== id);
                        console.log(remainingOrders);
                        setOrders(remainingOrders);
                    }
                })
        }
    }

    return (
        <div className="row row-cols-1 row-cols-md-3 m-2 g-4">
            {
                orders?.map(order => <div key={order._id}>
                    <div className="col">
                        <div className="card mb-3" style={{ maxWidth: "540px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={order.image} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{order.resort}</h5>
                                        <p className="card-text">Reserved by : <span>{order.name}</span></p>
                                        <p>Email: {order.email}</p>
                                        <p>Reserved date: {order.date}</p>
                                        <div><button className="btn btn-outline-primary">update</button> <button onClick={() => handleDeleteOrders(order._id)} className="btn btn-danger">Delete</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default ManageOrder;