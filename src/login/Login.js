import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import google from '../images/google.png';

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="m-4 " style={{ overflowX: "hidden" }}>
            <div className="col-md-6 row mx-auto shadow bg-light">
                <div className="col-md-6 mx-auto text-center p-4">
                    <img className="img-fluid rounded" src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="" />
                </div>
                <div className="col-md-6 rounded mx-auto text-center py-3">
                    <h4 className=" p-3">Please SignIn</h4>
                    <div className="">
                        <button onClick={handleGoogleLogin} title="SignIn with Google" className="btn btn-primary"> <span><img style={{ width: "50px", height: "50px" }} src={google} alt="" /></span> Sign In with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;