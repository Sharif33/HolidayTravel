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
        <div className="p-5">
            <div className="col-md-6 mx-auto text-center pb-5">
                <img className="img-fluid rounded-circle" src={user?.photoURL} alt="" />
                <h2 className="text-warning">{user?.displayName}</h2>
                <h2>Your reserved resort : <span className="text-danger">{orders.length}</span> </h2>
            </div>
            <div className="row row-cols-md-4">
                {
                    orders?.map(order =>
                        <div key={order._id} className="col">
                            <div>
                                <h6>Email : {order?.email}</h6>
                                <h6>Phone : {order?.phone}</h6>
                                <div className="d-flex justify-content-between">
                                    <h6>Booking Date : {order?.date}</h6>
                                    <h6>Cost : <span className="text-danger">{order?.cost} BDT</span> </h6>
                                </div>

                                <img className="img-fluid" style={{ height: "15rem" }} src={order?.image} alt="" />
                                <h5>{order?.resort}</h5>
                            </div>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-outline-info">{order?.status}</button>
                                <button onClick={() => handleDeleteOrders(order._id)} className="btn btn-danger">Cancel</button>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default MyOrders;