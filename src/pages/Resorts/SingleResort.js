import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleResort = () => {

    const { id } = useParams();

    const [resorts, setResorts] = useState([]);

    useEffect(() => {
        fetch(`https://gentle-taiga-36884.herokuapp.com/resorts/${id}`)
            .then(res => res.json())
            .then(data => setResorts(data))
    }, [id])

    return (
        <div>
            <div className='container py-5 my-5'>
                <div className="row">
                    <div className="col-md-6 border border-warning shadow-lg">
                        <div>
                            <h3 style={{ color: "#62599F" }}>{resorts?.name}</h3>
                            <h5 className="text-decoration-underline" style={{ color: "#005562" }}>{resorts?.location}</h5>
                            <img className='w-100' src={resorts?.image} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 border p-4">
                        <div className="">
                            <h5 className='text-secondary'>{resorts?.rating} <span className="text-warning"><i className="fas fa-star"></i></span><span> ({resorts?.reviews} </span><small className="text-secondary">reviews)
                            </small> </h5>
                        </div>
                        <h2 className="text-info  py-3">Cost: <span className="text-danger fw-bold">{resorts?.cost} BDT</span> <span className="fs-6 ">(taxes and vates included)</span></h2>

                        <p>{resorts?.description}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleResort;