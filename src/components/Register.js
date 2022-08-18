import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "../api";

const Register = (props) => {
    const { setToken, token } = props;
    let nav = useNavigate();
    async function handleSubmit(event){
        event.preventDefault();
        const username = event.target[0].value;
        const password = event.target[1].value;
        localStorage.setItem("username", username);
        registerUser(username, password, setToken);
        event.target[0].value= "";
        event.target[1].value= "";
        nav("/");
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <div className="form-outline">
                        <input
                          type="text"
                          id="userReg"
                          className="form-control"
                          autoComplete="off"
                        />
                        <label className="form-label" htmlFor="userReg">
                          Username
                        </label>
                      </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="passReg"
                      className="form-control"
                      autoComplete="off"
                    />
                    <label className="form-label" htmlFor="passReg">
                      Password
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Sign up
                  </button>
        </form>
        </>
    )
}

export default Register;