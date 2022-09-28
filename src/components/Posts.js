import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";



const Posts = (props) => {
    return (
        <div style={{ cursor: 'pointer', maxWidth: '90%' }}>
            {props.posts.map((post) => {
                return (<Card sx={{ p: 1,m:1 }} onClick={()=>{console.log(post._id)}} key={post._id}>
                    <CardContent sx={{ p: 1, minHeight: 84 }}>
                        <Typography variant="h5" component="div" sx={{ m: 1 }}>
                            {post.title}
                        </Typography>
                        <Typography variant="overline" sx={{ m: 1 }}>
                            {post.author.name}
                        </Typography>
                        <Typography variant="body1" sx={{ m: 1 }}>
                            {post.description}
                        </Typography>
                        <Grid container>

                            {post.tag.map((tag) => {
                                return (
                                    <Grid item key={tag._id}>

                                        <Typography variant="body2" sx={{ m: 1 }}>
                                            {tag.name}
                                        </Typography>
                                    </Grid>
                                );
                            })
                            }
                        </Grid>
                        <Typography variant="caption" sx={{ m: 1 }}>
                            {post.votes}
                        </Typography>
                        <Typography variant="caption" sx={{ m: 1 }}>
                            {post.views}
                        </Typography>
                    </CardContent>
                </Card>


                )
            })}

        </div>
    );
};

export default Posts;
