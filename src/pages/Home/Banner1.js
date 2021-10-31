import React from 'react';
import { Link } from 'react-router-dom';
import slide from '../../images/slide-1.jpg';
import slide2 from '../../images/slide-2.jpg';
import slide3 from '../../images/slide-3.jpg';

const Banner1 = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block ">
                            <h1 style={{ fontSize: "5em" }}>Find your next stay</h1>
                            <p>Treat yourself! Travel with holidayTravel and makes your holiday special.</p>
                            <Link to="/about"><button className="btn btn-outline-light p-3 rounded-pill">Learn More</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block ">
                            <h5 style={{ fontSize: "5em" }}>Find your Best Resort</h5>
                            <p>Treat yourself! Your dream resort stay is just a few clicks away.</p>
                            <Link to="/about"><button className="btn btn-outline-light p-3 rounded-pill">Learn More</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block ">
                            <h5 style={{ fontSize: "5em" }}>Find the perfect hotel</h5>
                            <p>From cheap hotels to luxury rooms and everything in between.</p>
                            <Link to="/about"><button className="btn btn-outline-light p-3 rounded-pill">Learn More</button></Link>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner1;