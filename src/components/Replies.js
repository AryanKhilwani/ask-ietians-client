import {  Card, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'

import ReplyContext from '../context/reply/replyContext'

const Replies = (props) => {
    const replycontext = useContext(ReplyContext)
    const { fetchallreplies,num } = replycontext
    // let replies = []
    const [replies, setReplies] = useState()
    const fetchdata = async ()=>{
        const reps = await fetchallreplies(props.id);
        // console.log(reps)
        setReplies(reps)
    }
    useEffect(() => {
        fetchdata();
        // console.log(rels)
        
        // eslint-disable-next-line
    }, [num])
    const [votes, setVotes] = useState(0)

    // {
    //     "upvotes": [],
    //     "downvotes": [
    //       "ooZizoLt6XTcCujA0dRho2PX1BA2"
    //     ],
    //     "_id": "633c26d0659f220d5092e2dc",
    //     "post": "633c20b5257cb925f86900e7",
    //     "comment": "reply to me",
    //     "author": {
    //       "isAdmin": false,
    //       "_id": "633c26d0659f220d5092e2db",
    //       "name": "Akshat sharma",
    //       "email": "akshat7509999412@gmail.com",
    //       "uid": "ooZizoLt6XTcCujA0dRho2PX1BA2"
    //     },
    //     "time": "2022-10-04T12:28:00.878Z",
    //     "__v": 6
    //   },

    const handleUpvote = () => {
        setVotes(votes + 1)
    }

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

                    <Typography variant="caption" sx={{ m: 1 }}  onClick={handleUpvote}>
                        {votes} Votes
                    </Typography>
                </Stack>
                </Card>
            )
        })}</>
    )
}

export default Replies