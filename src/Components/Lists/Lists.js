import React from 'react';
import { Link, Navigate,Outlet } from 'react-router-dom';
import './Lists.css'

const Lists = ({service}) => {
    const {name,country }=service
    return (
        <div className="service pb-5 col-lg-6">
           
        <h1>{service.length}</h1>
        <h2 className="px-3 text-center">University: {name}</h2>
        <h4 className="px-3 text-center">{country}</h4>
        <nav>
        <Link to={`/details/${name}`}>
        <button className="btn btn-primary px-5 rounded mx-5 me-5 mt-4 pe-4 w-50 ps-4">Details</button>
        </Link>
        </nav>
        <Outlet></Outlet>
        
    </div>
    );
};

export default Lists;