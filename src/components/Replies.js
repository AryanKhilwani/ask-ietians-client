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

    const handleUpvote = () => {
        setVotes(votes + 1)
    }

    return (
        <>{replies && replies.map((reply) => {
            return (
                <Card  sx={{ m: 1 }} key={reply._id}> 
                <Stack  sx={{ p: 1}}>
                    
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