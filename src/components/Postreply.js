import React, { useContext } from 'react'

import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';

import UserContext from '../context/user/userContext';
import ReplyContext from '../context/reply/replyContext';
import { useParams } from 'react-router-dom';

const Postreply = () => {
    const replycontext = useContext(ReplyContext)
    const {addReply} = replycontext;
    const context = useContext(UserContext)
    const { user } = context;

    const { id } = useParams();
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleClick = () => {
        console.log(value,id)
        addReply(value,id)
        setValue('')
    }
    return (
        <Stack spacing={2} alignItems='center'>
            <TextField
                id="outlined-multiline-flexible"
                placeholder="Share your thoughts..."
                fullWidth
                multiline
                rows={4}
                value={value}
                onChange={handleChange} />
            <Button variant='contained' sx={{ maxWidth: '10%' }} onClick={handleClick}>
                Reply
            </Button>
        </Stack>
    )
}

export default Postreply