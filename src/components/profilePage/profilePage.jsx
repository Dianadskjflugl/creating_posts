import React, {useEffect, useState} from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import classes from './profilePage.module.css';
import {useFetching} from '../../hooks/useFetching';
import PostService from '../../API/postServise';
import Loader from '../../UI/loader/loader';
import { Button } from '@material-ui/core';


const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostsById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostsById(params.id)
        fetchComments(params.id)
    },[params])

    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    return (
        <div className={classes.block}>
            <Button onClick={goBack}>Назад</Button>
            {isComLoading
                ? <Loader/>
                :   <><h1>{post.title}</h1>
                    <h3>Комментарии:</h3>
                    <div className={classes.comments}>
                    {comments.map(comm =>
                        <div className={classes.comment}
                            key={comm.id}>
                            <h5>email: <br/>{comm.email}</h5>
                            <div><p>{comm.body}</p></div>
                        </div>
                    )}
                </div></>
            }
        </div>
    );   
};

export default PostIdPage;