import {  Card, Stack, Typography } from '@mui/material'
import React from 'react'

const Replies = () => {
    const replies = [{
        _id: 1,
        author: {
            name: 'reply author'
        },
        comment: 'reply',
        votes: 10
    }, {
        _id: 2,
        author: {
            name: 'reply author'
        },
        comment: 'reply',

        votes: 10
    },
    {
        _id: 3,
        author: {
            name: 'reply author'
        },
        comment: 'reply',

        votes: 10
    }]
    return (
        <>{replies && replies.map((reply) => {
            return (
                <Card  sx={{ p: 1, m: 1 }} key={reply._id}> 
                <Stack>
                    
                    <Typography variant="overline" sx={{ m: 1 }}>
                        {reply.author.name}
                    </Typography>

                    <Typography variant="body1" sx={{ m: 1 }}>
                        {reply.comment}
                    </Typography>

                    <Typography variant="caption" sx={{ m: 1 }}>
                        {reply.votes} Votes
                    </Typography>
                </Stack>
                </Card>
            )
        })}</>
    )
}

export default Replies