import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddResort.css';

const AddResort = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://gentle-taiga-36884.herokuapp.com/resorts', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-resort p-4 col-md-6 mx-auto">
            <div className="shadow p-4 bg-custom rounded">
                <h2 className="text-light py-2">Please Add a Resort</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 100 })} placeholder="Name" />
                    <input {...register("location", { required: true, maxLength: 100 })} placeholder="Location" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input type="number" {...register("id")} placeholder="ID" />
                    <input type="number" {...register("contact")} placeholder="Phone Number" />
                    <input type="number" {...register("cost")} placeholder="Price" />
                    <input type="number" {...register("rating")} placeholder="Rating" />
                    <input type="number" {...register("reviews")} placeholder="Reviews" />
                    <input {...register("image")} placeholder="image url" />
                    <input className="btn btn-outline-light" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddResort;