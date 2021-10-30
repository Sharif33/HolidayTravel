import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    /* const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    console.log(orders); */

    let deleteCount = 0;
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [email, deleteCount]);
    // console.log(orders);

    /*     //Delete Part
        const [products, setProducts] = useState([]);
        useEffect(() => {
            fetch('http://localhost:5000/myOrders')
                .then(res => res.json())
                .then(data => {
                    setProducts(data);
                    console.log(products);
                })
        }, [products]);
    
        //DELETE AN Products
        const handleDeleteUser = id => {
            const url = `http://localhost:5000/myOrders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        console.log(data);
                        const remainingProducts = orders.filter(order => order._id !== id);
                        console.log(remainingProducts);
                        console.log(products);
                        setOrders(remainingProducts);
                    }
                })
        } */

    return (
        <div className="container p-5">
            <h2>This is my order: {orders.length}</h2>
            <div className="row row-cols-md-4">
                {
                    orders?.map(order =>

                        <div key={order._id} className="col">
                            <h5>{order?.resort}</h5>
                            <img src={order?.image} alt="" />
                        </div>


                    )
                }

            </div>
        </div>
    );
};

export default MyOrders;