
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
            <div className="text-center pt-2">
                <h2 className="fw-bold">Best Resorts in United States</h2>
                <p className="text-secondary fs-4">Reserve any Resorts </p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 m-2 g-4">
                {resorts.length == 0 ?
                    <div className="d-flex justify-content-center fs-1">
                        <button className="btn btn-primary" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    </div>
                    :
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