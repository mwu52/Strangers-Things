import axios from "axios";
const APIURL = "https://strangers-things.herokuapp.com/";
const cohort =  "2206-FTB-ET-WEB-FT"

export async function registerUser(username, password, setToken){
    try{
        const data = await fetch(`${APIURL}/api/${cohort}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                },
            }),
        });
        const response = await data.json();
        const Token = response.data.token;
        localStorage.setItem("token", Token);
        setToken(Token);
    } catch (error) {
        throw error;
    }
}

export async function userLogin(username, password, setToken){
    fetch(`${APIURL}/api/${cohort}/users/login`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password,
            },
        }),
    })
    .then((response) => response.json())
    .then((result) => {
        const Token = result.data.token;
        localStorage.setItem("token", Token);
        setToken(Token);
    })
    .catch(console.error)
}
