import React, { useEffect, useState } from 'react';
import Lists from '../Lists/Lists';
import './List.css'


const List = () => {
    const [services,setServices] =useState([])
    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id="service">
           <h1 className="text-center text-success">Our Services</h1>
            <div className=" row service-container">
               
            
            {
                services?.map(service=><Lists  service={service}></Lists>)
            }
        </div>
       </div>
    );
};

export default List;