import React, { useEffect } from "react";

import { BrowserRouter } from "react-router-dom";

import {useAuth} from "../hooks/auth"
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";


export const Routes = () =>{
    const {user} = useAuth()
    useEffect(()=>{

        console.log("EAE TIUZAO" +user);
    }, [user])
    return(
        <BrowserRouter>
           { user ? <AppRoutes/> : <AuthRoutes/>} 
        </BrowserRouter>
    )
}