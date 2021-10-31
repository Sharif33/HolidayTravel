import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div className="bg-light">
            <div className="container py-4">
                <div className="col-md-8 mx-auto bg-white shadow p-4 rounded">
                    <h1 style={{ fontWeight: "300" }} className="text-center p-3">Corporate contact</h1>
                    <div className="row row-cols-md-2 m-2 g-3 ">
                        <div className="col">
                            <div className="p-4  h-100 bg-light">
                                <h5>Do you need to make changes to a booking?</h5>
                                <Link to="/home">Visit my Bookings page</Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-4  bg-light h-100">
                                <h5>Do you need help with a booking?</h5>
                                <Link to="/login">Sign in to use our Help Centre</Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-4  h-100 bg-light">
                                <h5>Are you a property needing help?</h5>
                                <Link to="/home">Contact Partner Support</Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-4  bg-light h-100">
                                <h5>Questions about Booking.com for Business?</h5>
                                <Link to="/home">Read more about our service</Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-4  h-100 bg-light">
                                <h5>Want to work for Booking.com?</h5>
                                <Link to="/home">See our Careers page</Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-4  bg-light h-100">
                                <h5>Are you from the press?</h5>
                                <Link to="/home">Visit our Press Centre</Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-4  h-100 bg-light">
                                <h5>Want legal information about Booking.com?</h5>
                                <Link to="/home">Here's the necessary details</Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-4  bg-light h-100">
                                <h5>Do you represent a public authority?</h5>
                                <Link to="/home">Submit an official request</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-8 mx-auto my-4">
                    <div className="bg-white">
                        <h5 className="text-center border p-3 shadow">Help Center</h5>
                        <div className="p-4">
                            <h3>Welcome to the Help Centre</h3>
                            <p>Sign in to contact Customer Service, we're available 24 hours a day</p>
                        </div>
                        <div className="p-4 shadow">
                            <div className="row row-cols-md-2 ">
                                <div className="p-4">
                                    <h5><span><i className="fas fa-comments fs-2"></i></span> Live Chat</h5>
                                    <small>The fastest way to talk to one of our Customer Service agents about your bookings.</small>
                                </div>
                                <div className="p-4">
                                    <h5><span><i className="fas fa-phone-volume fs-2"></i></span> Call Us</h5>
                                    <small>For anything urgent, you can call us 24/7 on a local or international phone number.</small>
                                </div>
                            </div>
                            <Link to="/login"><button className="w-100 btn btn-primary p-2 fs-5 fw-bold">Sign In</button></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 mx-auto my-4">
                    <div className="bg-white p-4">
                        <h4 className=" px-4 p-2">Frequently asked questions</h4>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h4 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed text-primary " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Who is going to charge my credit card, and when?
                                    </button>
                                </h4>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">You may be charged a prepayment according to the property's prepayment policy. This is done to verify your credit card, where a temporary hold is placed on an amount until after check-out. It's best to contact the property for any charging queries.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h4 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed text-primary " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Can I cancel my booking?
                                    </button>
                                </h4>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Yes, any cancellation fees are determined by the property and listed in your cancellation policy. You will pay any additional costs to the property.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h4 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed text-primary " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Can I make a reservation without a credit card?
                                    </button>
                                </h4>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">A valid card is needed to guarantee your reservation with most properties. We do offer a number of properties, however, that will guarantee your reservation without a card. You can also make a booking using someone else’s card provided you have their permission. In this case please confirm the card holder’s name and that you have permission to use their card, in the ‘Special Requests’ box when making your booking.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;