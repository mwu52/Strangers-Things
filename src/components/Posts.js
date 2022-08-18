import React, { useState } from "react";

    const Posts = (props) => {
        const {posts, token } = props;

        return (
            <div>
                {posts.map((post, idx) => {
                    let postId = post._id;
                    let ifOwner = false;

                    if (token) {
                        const author = localStorage.getItem("username");
                        if (post.author.username === author){
                            ifOwner = true;
                        }
                    }

                    return(
                        <div>
                            <h6>${post.title}</h6>
                            <p>${post.description}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
