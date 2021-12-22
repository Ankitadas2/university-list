import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router';

const Details = () => {
    const {serviceId}=useParams()
    const [user,setUser]=useState([]);
    const [single,setSingle]=useState([])
    
    useEffect(()=>{
        fetch('/data.json')
         .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
  useEffect(()=>{
    const foundUse=user.find(service=>service.name ==serviceId)

    setSingle(foundUse)
  },[user])
    
   return (
       <div>
      <h2 className="text-center text-success pt-4 fs-1">University details</h2>
        <div className="container">
           <div className="mx-5 px-5 mt-5 pb-5">
           <h1>Name:{single?.name}</h1>
           <h1>Country: {single?.country}</h1>
           <h4>State: {single?.stateProvince}</h4>
           <h4>Website: {single?.web_pages}</h4>
           <h4>Domain: {single?.domains}</h4>
          
           </div>
        </div>
        </div>
    );
};

export default Details;