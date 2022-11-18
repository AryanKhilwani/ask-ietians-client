import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Chip, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Vote from "./Vote";
import Menu from "./Menu";

const Posts = (props) => {

    const Navigate = useNavigate()


    return (
        <div style={{ cursor: 'pointer', maxWidth: '100%' }}>

            {props.posts.map((post) => {
                return (
                    <Box
                        key={post._id}

                    // component={NavLink}

                    // to={`/post/${post._id}`}
                    >

                        <Card sx={{ p: 1, m: 1 }} >
                            <Grid container>
                                <Grid item>
                                    <Vote metadata={post} type={'posts'} />
                                </Grid>

                                <Grid item onClick={() => { console.log(post._id); Navigate(`/post/${post._id}`) }} sx={{ width: '90%' }}>
                                    <CardContent
                                        sx={{ p: 1, minHeight: 84 }}
                                    >
                                        <Typography variant="h5" component="div" sx={{ m: 1 }}>
                                            {post.title}
                                        </Typography>
                                        <Typography variant="overline" sx={{ m: 1 }}>
                                            {post.author && post.author.name}
                                        </Typography>
                                        <Typography variant="body1" sx={{ m: 1 }}>
                                            {post.description}
                                        </Typography>
                                        <Grid container spacing={1}>
                                            {post.tags.map((tag) => {
                                                return (
                                                    <Grid item key={tag._id}>
                                                        {/* <Typography variant="body2"  sx={{ m: 1 }}>
                                                                {tag.name}
                                                            </Typography> */}

                                                        <Chip  sx={{ ml: 1 }} label={tag.name} variant="outlined" />
                                                    </Grid>
                                                );
                                            })
                                            }
                                        </Grid>
                                        {/* <Typography variant="caption" sx={{ m: 1 }}>
                                                {post.upvotes.length - post.downvotes.length} Votes
                                            </Typography> */}
                                        {/* <Typography variant="caption" sx={{ m: 1 }}>
                                            {post.views} Views
                                        </Typography> */}
                                    </CardContent>

                                </Grid>
                                <Grid>
                                    <Menu of='posts' reportID={post._id}/>

                                </Grid>
                            </Grid>
                        </Card>

                    </Box>
                )
            })}
            
        </div >
    );
};

export default Posts;
