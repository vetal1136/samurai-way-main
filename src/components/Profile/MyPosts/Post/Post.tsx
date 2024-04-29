import React from 'react';
import s from "./Post.module.css"

type PostType = {
    message: string
    likesCount: number
}
const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            post 1
            <div>
                <span>{props.message}</span>
            </div>
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;