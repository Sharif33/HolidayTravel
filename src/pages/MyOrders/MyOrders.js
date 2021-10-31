import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {

    let deleteCount = 0;
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const email = user?.email;
    useEffect(() => {
        fetch(`https://gentle-taiga-36884.herokuapp.com/myOrders/${email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [email, deleteCount]);
    // console.log(orders);

    //Delete Part
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch('https://gentle-taiga-36884.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setMyOrders(data);
            })
    }, []);

    //DELETE AN Products
    const handleDeleteOrders = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://gentle-taiga-36884.herokuapp.com/myOrders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Canceled successfully');
                        // console.log(data);
                        const remainingOrders = orders.filter(order => order._id !== id);
                        console.log(remainingOrders);
                        // console.log(myOrders);
                        setOrders(remainingOrders);
                    }
                })
        }
    }


    return (
        <div className="container p-5">
            <h2>This is my order: {orders.length}</h2>
            <div className="row row-cols-md-4">
                {
                    orders?.map(order =>
                        <div key={order._id} className="col">
                            <div className="d-flex justify-content-between"><button className="btn btn-outline-info">{order?.status}</button> <button onClick={() => handleDeleteOrders(order._id)} className="btn btn-danger">Cancel</button></div>
                            <div><h5>{order?.resort}</h5>
                                <img src={order?.image} alt="" /></div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default MyOrders;