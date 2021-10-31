import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SingleResort = () => {

    const { user } = useAuth();

    const { id } = useParams();

    const [resorts, setResorts] = useState([]);

    useEffect(() => {
        fetch(`https://gentle-taiga-36884.herokuapp.com/resorts/${id}`)
            .then(res => res.json())
            .then(data => setResorts(data))
    }, [id])

    // post resort

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        // console.log(data);

        axios.post(`https://gentle-taiga-36884.herokuapp.com/orders`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Reserved successfully. Check My Order');
                    reset();
                }
            })
    }

    return (
        <div>
            <img style={{ height: "30rem" }} className='w-100' src={resorts?.image} alt="" />
            <div className='container py-5'>
                <div className="row">
                    <div className="col-md-9">
                        <h3 style={{ color: "#62599F" }}>{resorts?.name}</h3>
                        <h5 className="text-decoration-underline" style={{ color: "#005562" }}>{resorts?.location}</h5>
                        <div className=" d-flex justify-contenet-end align-items-center">
                            <h4 className="text-info w-100 py-3">Cost: <span className="text-danger fw-bold">{resorts?.cost} BDT</span> <span className="fs-6 ">(taxes and vates included)</span></h4>
                            <h6 className='text-secondary w-100'>{resorts?.rating} <span className="text-warning"><i className="fas fa-star"></i></span><span> ({resorts?.reviews} </span><small className="text-secondary">reviews)
                            </small> </h6>

                        </div>
                        <p>{resorts?.description}</p>
                    </div>

                    <div className="col-md-3 ">
                        <div className="add-resort">
                            <div className="shadow p-4 bg-custom rounded">
                                <h3 className="text-light py-2">Reserve this Resort</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input defaultValue={resorts?.name} {...register("resort", { required: true })} />
                                    {errors.resort && <span className="text-warning">Please click again</span>}
                                    <input defaultValue={resorts?.cost} {...register("cost")} />
                                    <input defaultValue="Pending..." {...register("status")} />
                                    <input defaultValue={user?.displayName} {...register("name")} />
                                    <input defaultValue={user?.email} {...register("email", { required: true })} />
                                    {errors.email && <span className="text-warning">Please click again</span>}
                                    <input placeholder="Address"  {...register("address")} />
                                    <input placeholder="City and country"  {...register("city")} />
                                    <input placeholder="Phone number"  {...register("phone")} />
                                    <input placeholder="Date" type="date" {...register("date")} />

                                    <input defaultValue={resorts?.image} {...register("image", { required: true })} />
                                    {errors.image && <span className="text-warning">Please click again</span>}

                                    <button className="btn btn-outline-light" type="submit">Reserved</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>



            </div>


        </div>
    );
};

export default SingleResort;