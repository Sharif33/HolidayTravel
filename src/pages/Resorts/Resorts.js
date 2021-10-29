
import React, { useEffect, useState } from 'react';
import Resort from './Resort';

const Resorts = () => {

    const [resorts, setResorts] = useState([]);

    useEffect(() => {
        fetch('https://gentle-taiga-36884.herokuapp.com/resorts')
            .then(res => res.json())
            .then(data => setResorts(data))
    }, [])

    return (
        <div className="container">
            <div className="text-center  border-bottom border-primary p-4">
                <h1 className="fw-bold">Best Resorts in United States</h1>
                <p className="text-secondary fs-4">Reserve any Resorts </p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 m-2 g-4">
                {
                    resorts.map(resort => <Resort
                        key={resort._id}
                        resort={resort}
                    >
                    </Resort>)
                }
            </div>
        </div>
    );
};

export default Resorts;