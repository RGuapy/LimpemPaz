import React from "react";
import { Route,Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Arena from "./Arena";


const Rotas = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route element = { <Home/> }  path="/" exact />
                <Route element = { <Arena/> }  path="/Arena" exact />
            </Routes>
       </BrowserRouter>
   )
}

export default Rotas;