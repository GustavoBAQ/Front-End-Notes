import React from "react";

import {Route, Routes} from "react-router-dom"


import {Home} from "../pages/Home"
import {Details} from "../pages/Details"
import {NewNotes} from "../pages/NewNotes"
import {Profile} from "../pages/Profile"

export const AppRoutes = () =>{
    return(

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/newnotes" element={<NewNotes/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
        )
}