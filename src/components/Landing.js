import React from "react";
import { NavLink, useNavigate } from "react-router-dom";


const Landing = (props) => {
    const { token, setToken} = props;
    const username = localStorage.getItem("username")

    return(
        <div>
            <h1>Welcome {username}</h1>
        </div>
    )
}

export default Landing;