import React from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

export const Login =()=>{
    const {loginWithRedirect} = useAuth0(); 
    return <button onClick= {()=>loginWithRedirect()}> Login </button>
}