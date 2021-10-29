import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

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
        <div style={{ overflowX: "hidden" }}>

            <div className="text-center">
                <p>Please SignIn</p>
                <button onClick={handleGoogleLogin} title="SignIn with Google" className="btn btn-primary">Sign In with google</button>
            </div>

            {/* <img style={{ width: "50px", height: "50px" }} src={google} alt="" /> */}

        </div>
    );
};

export default Login;