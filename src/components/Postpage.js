import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import PostContext from '../context/post/postContext'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container, Grid, Stack } from "@mui/material";
import Postreply from './Postreply';
import Replies from './Replies';

const Postpage = () => {
    const postcontext = useContext(PostContext)
    const { getPostById } = postcontext

    const [votes, setVotes] = useState(0)
    const [post, setPost] = useState()

    const { id } = useParams();
    const fetchdata = async () => {
        const data = await getPostById(id);
        console.log(data)
        setPost(data)
        setVotes(data.upvotes.length - data.downvotes.length)
    }
    useEffect(() => {
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

    const handleUpvote = () => {
        setVotes(votes + 1)
    }

    return (<>
        {
            post &&



            <Stack spacing={4} sx={{ mt: 10 }} alignItems='center'>

                <Card sx={{ p: 1, m: 1, width: '100%' }}>
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
                        <Typography variant="caption" sx={{ m: 1 }} onClick={handleUpvote}>
                            {votes} Votes
                        </Typography>
                        <Typography variant="caption" sx={{ m: 1 }}>
                            {post.views} Views
                        </Typography>
                    </CardContent>
                </Card>
                <Container maxWidth='md'>
                    <Postreply />
                </Container>

                <Container>
                    <Replies id={id} />
                </Container>
            </Stack>
        }
    </>
    )
}

export default Postpage