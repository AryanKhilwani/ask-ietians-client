import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Chip, Container, Grid, Skeleton, Stack } from "@mui/material";
import Postreply from './Postreply';
import Replies from './Replies';

import PostContext from '../context/post/postContext'
import UserContext from '../context/user/userContext';
import Vote from './Vote';
import SortBar from './SortBar';
import Menu from './Menu';
import Spinner from './Spinner';
const Postpage = () => {

    const context = useContext(UserContext)
    const { user } = context;

    const postcontext = useContext(PostContext)
    const { getPostById } = postcontext

    const [votes, setVotes] = useState(0)
    const [post, setPost] = useState()
    const [loading, setLoading] = useState(false)

    const { id } = useParams();
    const fetchdata = async () => {
        const data = await getPostById(id);
        setPost(data)
        setLoading(false)
        setVotes(data.upvotes.length - data.downvotes.length)
    }
    useEffect(() => {
        setLoading(true)
        fetchdata();
        // eslint-disable-next-line
    }, [])

    // {
    //     "views": 16,
    //     "upvotes": [
    //       "ooZizoLt6XTcCujA0dRho2PX1BA2"
    //     ],
    //     "downvotes": [],
    //     "_id": "633856a4013a113288dc1cda",
    //     "title": "title",
    //     "tags": [
    //       {
    //         "used": 0,
    //         "_id": "633854b2af5c2f2c1822fecc",
    //         "name": "tag1",
    //         "__v": 0
    //       }
    //     ],
    //     "description": "desc",
    //     "time": "2022-10-01T15:03:00.768Z",
    //     "__v": 22
    //   }


    return (<>
        {
            post ?


                <Stack spacing={4} sx={{ mt: 10 }} alignItems='center'>

                    <Container >
                        {
                            loading ? (<Stack sx={{ m: 1 }}>
                                <Card>

                                    <Skeleton sx={{ bgcolor: 'white' }} variant="rounded" height={200} animation="wave" />
                                </Card>
                            </Stack>) :


                                <Card sx={{ p: 1, m: 1 }}>
                                    <Grid container>
                                        <Grid item>
                                            <Vote metadata={post} type={'posts'} />

                                        </Grid>

                                        <Grid item sx={{ width: '92%' }}>

                                            <CardContent sx={{ p: 1, minHeight: 84 }}>
                                                <Typography variant="h5" component="div" sx={{ m: 1 }}>
                                                    {post.title}
                                                </Typography>
                                                {post.author &&
                                                    <Typography variant="overline" sx={{ m: 1 }}>
                                                        {post.author.name}
                                                    </Typography>
                                                }
                                                <Typography variant="body1" sx={{ m: 1 }}>
                                                    {post.description}
                                                </Typography>
                                                <Grid container spacing={1}>
                                                    {post.tags.map((tag) => {
                                                        return (
                                                            <Grid item key={tag._id}>
                                                                {/* <Typography variant="body2" sx={{ m: 1 }}>
                                                        {tag.name}
                                                    </Typography>
                                                     */}

                                                                <Chip sx={{ ml: 1 }} label={tag.name} variant="outlined" />
                                                            </Grid>
                                                        );
                                                    })
                                                    }
                                                </Grid>
                                                {/* <Typography variant="caption" sx={{ m: 1 }} onClick={handleUpvote}>
                                        {votes} Votes
                                    </Typography> */}
                                                {/* <Typography variant="caption" sx={{ m: 1 }}>
                                        {post.views} Views
                                    </Typography> */}
                                            </CardContent>

                                        </Grid>
                                        <Grid>
                                            <Menu of='posts' reportID={post._id} />
                                        </Grid>
                                    </Grid>
                                </Card>
                        }
                    </Container>
                    {
                        user &&
                        <Container maxWidth='md'>
                            <Postreply />
                        </Container>
                    }

                    <Container>
                    </Container>

                    <Container>
                        <Replies id={id} />
                    </Container>
                </Stack>
                :
                <Container sx={{ mt: 11 }}>

                    <Card sx={{ m: 1 }}>
                        <Skeleton sx={{ bgcolor: 'white' }} variant="rounded" height={200} animation="wave" />
                    </Card>
                </Container>

        }
    </>
    )
}

export default Postpage