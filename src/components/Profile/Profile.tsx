import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div >
            <div>
                <img src="https://cdn.esawebb.org/archives/images/screen/carinanebula3.jpg"/>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;