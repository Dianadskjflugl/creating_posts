import React, { useState } from 'react';
import classes from './postForm.module.css';
import { Button, TextField } from '@material-ui/core';

const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' })


    const addNewPost = (e) => {
        e.preventDefault()
        if (!post.title == '' && !post.body == '') {
            const newPost = {
                ...post, id: Date.now()
            }
            create(newPost)
            setPost({ title: '', body: '' })
        }
    }

    return (
        <div className={classes.block}>
            <div className={classes.input}>
                <TextField
                    value={post.title}
                    onChange={e => setPost({ ...post, title: e.target.value })}
                    type="text"
                    label="Название поста"
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className={classes.input}>
                <TextField
                    value={post.body}
                    onChange={e => setPost({ ...post, body: e.target.value })}
                    type="text"
                    variant="outlined"
                    label="Описание поста"
                    multiline
                    minRows={4}
                    fullWidth
                />
            </div>
            <Button onClick={addNewPost} variant="outlined" color="primary">Создать пост</Button>
        </div>
    );
};

export default PostForm;