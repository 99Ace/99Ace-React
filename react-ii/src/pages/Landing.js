import React from 'react';
// import in useLocation
import { useLocation } from 'react-router-dom';

export default function Landing() {
    // Set up useLocation
    // const location = useLocation();
    // let message = location.state.message
    return <React.Fragment>
        {/* <p>{message}</p> */}
        <h1>Courses For Sale</h1>
        <a href='/individual'>Course A</a>
        
    </React.Fragment>
}