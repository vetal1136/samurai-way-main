import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
            my posts
            <div>
                new posts
            </div>
            <div className={s.posts}>
               <Post message={"Hi, how are you?"}/>
               <Post message={"It is my first post?"}/>
            </div>
        </div>

    );
};

export default MyPosts;