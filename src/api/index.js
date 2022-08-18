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

export async function posts(){
    try{
        const { data } = await axios.get(`${APIURL}/api/${cohort}/posts`);
        return data;
    } catch (error) {
        throw error;
    }
  }
  
  export async function makePost(token, title, description, price, location){
    fetch(`${APIURL}/api/${cohort}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            post: {
                title: title,
                description: description,
                price: price,
                location: location,
            },
        }),
    })
    .then((response) => response.json())
    .then((result) => {
        console.log(result);
    })
    .catch(console.error);
  }
  
  export async function showPosts(token){
    try{
        const data = await axios.get(`${APIURL}/api/${cohort}/users/me`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return data.data.data.posts;
    } catch (error) {
        console.error(error);
    }
  }
  
  export async function editPosts(
    token,
    postId,
    title,
    description,
    price,
    location
  ){
    fetch(`${APIURL}/api/${cohort}/posts/${postId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            post: {
                title: title,
                description: description,
                price: price,
                location: location,
            },
        }),
    })
    .then((response) => response.json())
    .then((result) => {
        console.log(result);
    })
    .catch(console.error);
  }
  
  
  export async function deletePost(token, postId){
    try{
        await axios.delete(`${APIURL}/api/${cohort}/posts/${postId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.error(error);
    }
  }

export async function postMessages(token, postId, content){
    await fetch(`${APIURL}/api/${cohort}/posts/${postId}/messages`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            message: {
                content: content,
            },
        }),
    })
    .then((response) => response.json())
    .then((result) => {
        console.log(result);
    })
    .catch(console.error);
}

export async function loadMessages(token){
    try {
        const data = await axios.get(`${APIURL}/api/${cohort}/users/me`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return data.data.data;
    } catch (error) {
        console.error(error)
    }
}