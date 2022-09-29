import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container, Grid, Stack } from "@mui/material";
import Postreply from './Postreply';
import Replies from './Replies';

const Postpage = () => {
  const {id} = useParams();
  const post = {
    _id: id,
    title: 'title',
    author: {
      name: 'author'
    },
    description: 'description',
    tag: [{_id:'2',name:'tag1'}],
    votes: 10,
    views: 100
  }
  const [votes, setVotes] = useState(post.votes)
  const handleUpvote=()=>{
    setVotes(votes+1)
  }
  
  return (
    <Stack spacing={4} sx={{mt:10}} alignItems='center'>
      
    <Card sx={{ p: 1, m: 1, width:'100%' }}>
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
        <Typography variant="caption" sx={{ m: 1 }} onClick={handleUpvote}>
            {votes} Votes
        </Typography>
        <Typography variant="caption" sx={{ m: 1 }}>
            {post.views} Views
        </Typography>
    </CardContent>
</Card>
<Container maxWidth='md'>
<Postreply/>
</Container>

<Container>
<Replies/>
</Container>
</Stack>
  )
}

export default Postpage