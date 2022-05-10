import React from 'react'
// import Navigate
import {useNavigate} from "react-router-dom";

export default function Login() {

    // Set up Navigate
    const navigate = useNavigate();

    function login() {
        // send to api
        navigate('/',{
            state: {
                message : "Login Successful"
            }
        })
    }

    return <React.Fragment>
        <h1>Login</h1>
        <form>
            <button onClick={login} >Login</button>
        </form>
    </React.Fragment>
}