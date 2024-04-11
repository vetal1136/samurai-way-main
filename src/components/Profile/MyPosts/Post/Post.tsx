import React from 'react';
import s from "./Post.module.css"

type PostType = {
    message: string
}
const Post = (props: PostType) => {
    return (
            <div className={s.item}>
                post 1
                <div>
                    <span>{props.message}</span>
                </div>
            </div>
    );
};

export default Post;