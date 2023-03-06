import { useNavigate } from 'react-router-dom';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classes from './postItem.module.css';



const PostItem = (props) => {

    const navigate = useNavigate()

    const goPost = () => navigate(`/posts/${props.post.id}`)

    const removePost = () => {
        props.remove(props.post)
    }

    return (
        <div className={classes.container}>
            <Card>
                <div className={classes.remove}>
                    <Button size="small" color="secondary" onClick={removePost}>
                        <div>close</div>
                    </Button>
                </div>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.number}.{props.post.title}
                    </Typography>
                    <Typography>
                        {props.post.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={goPost}>перейти</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default PostItem;