import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function PostPage(props) {
    // useState's first argument must be
    // the default value
    const [activePost, setActivePost] = useState({})
    const [activePostId, setActivePostId] = useState(0);


    // the default value
    const [activePost2, setActivePost2] = useState({})
    const [activePostId2, setActivePostId2] = useState(0);

    // load in the current active post
    useEffect(
        // part 1 :  what need to be done
        () => {
            // function to call for data
            const fetchPost = async (postId) => {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
                setActivePost(response.data)
            }
            // fetch the data of the id
            fetchPost(activePostId)
        },
        // part 2 : [ if this changes ]
        [activePostId])

    useEffect(
        // part 1 :  what need to be done
        () => {
            // function to call for data
            const fetchPost = async (postId) => {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
                setActivePost2(response.data)
            }
            // fetch the data of the id
            fetchPost(activePostId2)
        },
        // part 2 : [ if this changes ]
        [activePostId2])

    return (
        <React.Fragment>
            <h1>Posts</h1>

            <h2> Active Post </h2>

            {/* For user to key in the post id */}
            <input type="text" value={activePostId} name="activePostId"
                onChange={(evt) => {
                    setActivePostId(evt.target.value)
                }}
            />

            {/* Show the data */}
            <div class="card">
                <div class="card-title">
                    {activePost.title}
                </div>
                <p>
                    {activePost.body}
                </p>
            </div>
            <hr />
            <h2> Active Post </h2>

            {/* For user to key in the post id */}
            <input type="text" value={activePostId2} name="activePostId2"
                onChange={(evt) => {
                    setActivePostId2(evt.target.value)
                }}
            />

            {/* Show the data */}
            <div class="card">
                <div class="card-title">
                    {activePost2.title}
                </div>
                <p>
                    {activePost2.body}
                </p>
            </div>
            <hr />
        </React.Fragment>
    );
}