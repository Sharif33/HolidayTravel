import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div style={{ overflowX: "hidden" }}>
            <div className="bg-about">
                <div className="container p-5">
                    <h1 className="text-center text-warning p-2" style={{ fontWeight: "300" }}>About HolidayTravel™</h1>
                    <p className="text-light text-center">Founded in 1996 in Amsterdam, HolidayTravel has grown from a small Dutch startup to one of the world’s leading digital travel companies. Part of Booking Holdings Inc. (NASDAQ: BKNG), HolidayTravel’s mission is to make it easier for everyone to experience the world. <br /> <br />

                        By investing in the technology that helps take the friction out of travel, HolidayTravel seamlessly connects millions of travellers with memorable experiences, a range of transport options and incredible places to stay - from homes to hotels and much more. As one of the world’s largest travel marketplaces for both established brands and entrepreneurs of all sizes, HolidayTravel enables properties all over the world to reach a global audience and grow their businesses. <br /> <br />

                        HolidayTravel is available in 43 languages and offers more than 28 million total reported accommodation listings, including over 6.2 million listings alone of homes, apartments and other unique places to stay. No matter where you want to go or what you want to do, HolidayTravel makes it easy and backs it all up with 24/7 customer support.</p>
                </div>
            </div>
            <div className="bg-about2">
                <div className="container p-5">

                    <p className="text-light text-center">HolidayTravel B.V. is based in Amsterdam in the Netherlands, and is supported internationally by 198 offices in over 70 countries around the world: Accra - Amman - Amsterdam - Antalya - Athens - Atlanta - Auckland - Bangalore - Bangkok - Barcelona - Beijing - Berlin - Bilbao - Bogotá - Bolzano - Bordeaux - Boston - Bratislava - Brisbane - Bristol - Brussels - Bucharest - Budapest - Buenos Aires - Cairo - Calgary - Cambridge - Cancún - Cape Town - Casablanca - Catania - Chengdu - Chicago - Colombo - Copenhagen - Dallas - Denver - Dubai - Dublin - Dubrovnik - Dusseldorf - Edinburgh - Faro - Florence - Frankfurt am Main - Freiburg im Breisgau - Fukuoka - Grand Rapids - Guadalajara - Guangzhou - Haikou - Hamburg - Hanoi - Helsinki - Heraklion - Ho Chi Minh City - Hong Kong - Honolulu - Houston - Innsbruck - Istanbul - İzmir - Jakarta - Jeddah - Jeju - Johannesburg - Kiev - Koh Samui - Krakow - Kuala Lumpur - Kuta (Bali) - Las Palmas de Gran Canaria - Las Vegas - Lille - Lima - Limassol - Lisbon - Ljubljana - London - Los Angeles - Lyon - Madrid - Málaga - Manchester - Manila - Marrakech - Melbourne - Mexico City - Miami - Milan - Montpellier - Montréal - Moscow - Mumbai - Munich - Naha - Nairobi - Natal - New Delhi - New Orleans - New York - Nice - Norwalk - Orlando - Osaka - Oslo - Palma de Mallorca - Panama City - Paris - Phoenix - Phuket - Porto Alegre - Prague - Qingdao - Rennes - Reykjavík - Riga - Rimini - Rio de Janeiro - Rome - Saint Petersburg - Sallanches - Salzburg - San Diego - San Francisco - San Jose - San Juan - Santiago - Santo Domingo - São Paulo - Sapporo - Seattle - Seoul - Seville - Shanghai - Siem Reap - Singapore - Sochi - Sofia - Sorrento - Split - Stockholm - Strasbourg - Sydney - Taipei - Tallinn - Tbilisi - Tel Aviv - Thessaloníki - Tokyo - Toronto - Trabzon - Vancouver - Venice - Verona - Vienna - Vilnius - Warsaw - Washington - Xi'an - Yangon - Yogyakarta - Zagreb - Zurich. <br /> <br />

                        HolidayTravel B.V. is registered with the trade register of the Chamber of Commerce in Amsterdam, the Netherlands, under registration number 31047344. VAT registration number is NL805734958B01. Registration number with Dutch Data Protection Authority is 1288246.</p>
                </div>
            </div>
            <div>

                <div className="container my-4 mx-auto row">
                    <h1 className="text-center text-primary p-5">Learn More About Us</h1>
                    <div className="mx-auto col-md-6 ">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h4 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed text-primary  fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Incredible choice
                                    </button>
                                </h4>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Whether you want to stay in a chic city apartment, a luxury beach resort or a cosy B&B in the countryside, HolidayTravel provides you with amazing diversity and breadth of choice - all in one place.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h4 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed text-primary  fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Low rates
                                    </button>
                                </h4>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">HolidayTravel guarantees to offer you the best available rates. And with our promise to price match, you can rest assured that you’re always getting a great deal.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h4 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed text-primary  fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Instant confirmation
                                    </button>
                                </h4>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">At HolidayTravel, every reservation is instantly confirmed. Once you’ve found your perfect stay, a few clicks are all it takes.
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

export default AboutUs;