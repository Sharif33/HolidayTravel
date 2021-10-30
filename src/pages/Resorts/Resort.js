import React from 'react';
import { Link } from 'react-router-dom';

const Resort = ({ resort }) => {
    const { _id, name, image, location, description } = resort;
    return (
        <div>
            <div className="col rounded shadow text-center">
                <div className="card h-100">
                    <img style={{ height: "15rem" }} src={image} className="card-img-top" alt="" />
                    <div className="p-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <small className="fw-bold text-secondary"><span className="text-warning"><i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i></span>
                            </small>

                        </div>
                        <h5 className="text-dark">{name}</h5>
                        <p className="text-warning">{location}</p>
                        <p className="text-secondary">{description.slice(0, 120)}...</p>
                    </div>

                    <div className="border-top p-2 text-center">
                        <Link to={`resort/${_id}`}><button className="btn btn-outline-success w-100">Reserve this Resort</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resort;