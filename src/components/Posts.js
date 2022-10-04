import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Grid } from "@mui/material";
import {useNavigate } from "react-router-dom";



const Posts = (props) => {
    const Navigate = useNavigate()
    return (
        <div style={{ cursor: 'pointer', maxWidth: '90%' }}>
            {props.posts.map((post) => {

                return (
                <Box 
                key={post._id}
                
                    // component={NavLink}
                    
                    // to={`/post/${post._id}`}
                    >
                    
                <Card sx={{ p: 1, m: 1 }}
                    onClick={() => { console.log(post._id); Navigate(`/post/${post._id}`) }}
                    >
                    <CardContent sx={{ p: 1, minHeight: 84 }}>
                        <Typography variant="h5" component="div" sx={{ m: 1 }}>
                            {post.title}
                        </Typography>
                        <Typography variant="overline" sx={{ m: 1 }}>
                            {post.author && post.author.name}
                        </Typography>
                        <Typography variant="body1" sx={{ m: 1 }}>
                            {post.description}
                        </Typography>
                        <Grid container>
                            {post.tags.map((tag) => {
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
                            {post.upvotes.length-post.downvotes.length} Votes
                        </Typography>
                        <Typography variant="caption" sx={{ m: 1 }}>
                            {/* {post.views} Views */}
                        </Typography>
                    </CardContent>
                </Card>

                </Box>

                )
            })}

        </div>
    );
};

export default Posts;
