import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import RegisterUser from "./Register";
import Landing from "./Landing";

const App = () => {
    return (
        <>
        <div>
        </div>
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/register" element={<RegisterUser/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
        </>
    )
};

export default App;