import React from 'react';
import trip from '../../images/myrtle.jpg';
import trip2 from '../../images/orange.jpg';
import trip3 from '../../images/biloxi.jpg';
import trip4 from '../../images/pensacola.jpg';
import trip5 from '../../images/perdidokey.jpg';
import feature1 from '../../images/orlandoF.webp';
import feature2 from '../../images/sharmF.webp';
import feature3 from '../../images/ubudF.webp';
import feature4 from '../../images/porto.webp';
import feature5 from '../../images/myrtleF.webp';
import feature6 from '../../images/cancunF.webp';

const Banner = () => {
    return (
        <div className="container py-4">
            <h1>Make Your Holiday Happier</h1>
            <p>visit United States with <span>holidayTravel</span></p>
            <div className="row g-0">
                <div className="col-md-6">
                    <div className="card text-white fw-bold">
                        <img src={trip} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h2 className="card-title">Myrtle Beach</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card text-white fw-bold">
                        <img src={trip2} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h2 className="card-title">Orange Beach</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-md-4">
                    <div className="card text-white fw-bold">
                        <img src={trip3} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h2 className="card-title">Biloxi</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-white fw-bold">
                        <img src={trip4} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h2 className="card-title">Pensacola</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-white fw-bold">
                        <img src={trip5} className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <h2 className="card-title">Perdido key</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-4 pt-4 bg-light">
                <div className="px-3">
                    <h3>Featured resort destinations</h3>
                    <p>Check out these popular destinations for resorts</p>
                </div>
                <div className="row row-cols-3 row-cols-md-6">
                    <div className="col">
                        <div className="card">
                            <img src={feature1} className="card-img" alt="..." />
                            <div className="card-img-overlay  fw-bold">
                                <h5 className="card-title  text-white">Orlando</h5>
                            </div>
                            <div className="text-center fw-bold">
                                <h6>United States</h6>
                                <p>165 resorts</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={feature2} className="card-img" alt="..." />
                            <div className="card-img-overlay  fw-bold">
                                <h5 className="card-title  text-white">Orlando</h5>

                            </div>
                            <div className="text-center fw-bold">
                                <h6>United States</h6>
                                <p>165 resorts</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={feature3} className="card-img" alt="..." />
                            <div className="card-img-overlay  fw-bold">
                                <h5 className="card-title  text-white">Orlando</h5>

                            </div>
                            <div className="text-center fw-bold">
                                <h6>United States</h6>
                                <p>165 resorts</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={feature4} className="card-img" alt="..." />
                            <div className="card-img-overlay  fw-bold">
                                <h5 className="card-title  text-white">Orlando</h5>

                            </div>
                            <div className="text-center fw-bold">
                                <h6>United States</h6>
                                <p>165 resorts</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={feature5} className="card-img" alt="..." />
                            <div className="card-img-overlay  fw-bold">
                                <h5 className="card-title  text-white">Orlando</h5>

                            </div>
                            <div className="text-center fw-bold">
                                <h6>United States</h6>
                                <p>165 resorts</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={feature6} className="card-img" alt="..." />
                            <div className="card-img-overlay  fw-bold">
                                <h5 className="card-title  text-white">Orlando</h5>

                            </div>
                            <div className="text-center fw-bold">
                                <h6>United States</h6>
                                <p>165 resorts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;