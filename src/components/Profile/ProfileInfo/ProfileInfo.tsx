import React from 'react';
import s from "./ProfileInfo.module.css"
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    );
};

export default ProfileInfo;