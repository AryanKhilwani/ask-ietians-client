import React, { useContext, useEffect, useState } from 'react'

// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import ThumbDownAltTwoToneIcon from '@mui/icons-material/ThumbDownAltTwoTone';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Box, Stack } from "@mui/system";
import { IconButton, Typography } from '@mui/material';

import UserContext from '../context/user/userContext';

const theme = createTheme({
    palette: {
        orange: {
            main: '#FF4500',
            contrastText: '#fff',
        },
        blue: {
            main: '#9494FF',
            contrastText: '#fff',
        },

    },
});


const Vote = (props) => {
    const HOST = `${process.env.REACT_APP_APIURI}/${props.type}`


    const context = useContext(UserContext)
    const { user } = context;

    

    const [up, setUp] = useState('default')
    const [down, setDown] = useState('default')
    const [upvotes, setUpvotes] = useState(props.metadata.upvotes.length)
    const [downvotes, setDownvotes] = useState(props.metadata.downvotes.length)

    useEffect(() => {
        if(user){

            if(props.metadata.upvotes.includes(user.uid)){
                setUp('orange')
            }
            if(props.metadata.downvotes.includes(user.uid)){
                setDown('blue')
            }
        }
        console.log(upvotes, downvotes, props.metadata.upvotes,props.metadata.downvotes)
        // eslint-disable-next-line
    }, [user])


    const handleUpvote = () => {

        fetch(`${HOST}/like/${props.metadata._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('x-auth-token')
            },
        })
            .then((res) => {
                if(res.status === 200){

                    return res.json()
                }
                else{
                    return res.json().then(err => {throw err;});
                }
            })
            .then((json) => {
                console.log(json)
                setUpvotes(json[0].upvotes.length)
                setDownvotes(json[0].downvotes.length)
            }).catch((r)=>console.log(r));

        if (up === 'default' && down === 'default') {
            setUp('orange')
        }
        else if (up === 'default' && down === 'blue') {
            setUp('orange')
            setDown('default')
        }
        else if (up === 'orange') {
            setUp('default')
        }

    }
    const handleDownvote = () => {


        fetch(`${HOST}/dislike/${props.metadata._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('x-auth-token')
            },
        })
            .then((res) => res.json())
            .then((json) => {
                setUpvotes(json[0].upvotes.length)
                setDownvotes(json[0].downvotes.length)
                console.log(json)
            });

        if (down === 'default' && up === 'default') {
            setDown('blue')
        }
        else if (down === 'default' && up === 'orange') {
            setDown('blue')
            setUp('default')
        }
        else if (down === 'blue') {
            setDown('default')
        }
    }

    return (<>

        <ThemeProvider theme={theme}>

            <Box sx={{ mt: 2 }}>
                <Stack spacing={0}>
                    <IconButton aria-label="upvote" color={up} onClick={handleUpvote}>
                        <ThumbUpAltTwoToneIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2 }}>
                        {upvotes - downvotes}
                    </Typography>
                    <IconButton aria-label="downvote" color={down} onClick={handleDownvote}>
                        <ThumbDownAltTwoToneIcon />
                    </IconButton>
                </Stack>
            </Box>
        </ThemeProvider>
    </>
    )
}

export default Vote