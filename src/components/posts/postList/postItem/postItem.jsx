import { useNavigate } from 'react-router-dom';
import React from 'react';
import classes from './postItem.module.css';
import MyButtonNone from '../../../../UI/buttonNone/buttonNone';

const PostItem = (props) => {

    const navigate = useNavigate()

    const goPost = () => navigate(`/posts/${props.post.id}`)

    const removePost = () => {
        props.remove(props.post)
    }

    return (
        <div className={classes.container}>
            <div>
                <div className={classes.remove}>
                    <button className={classes.close} onClick={removePost}>&#215;</button>
                </div>
                <div>
                    <h2>
                        {props.number}.{props.post.title}
                    </h2>
                    <p>
                        {props.post.body}
                    </p>
                </div>
                <div>
                    <MyButtonNone onClick={goPost}>перейти</MyButtonNone>
                </div>
            </div>
        </div>
    );
}

export default PostItem;