import  React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">

     <Router>
     
        <Routes>
        <Route path="/" element={<Home></Home>}>
           
           </Route>
        <Route path="/home" element={<Home></Home>}>
           
           </Route>
           <Route  path="/details/:serviceId" element={<Details></Details>}>
           
           </Route>
         
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
