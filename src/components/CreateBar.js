import { React, useContext } from 'react';
import { Card, CardContent, TextField } from '@mui/material'
import { Box, Stack } from '@mui/system'
import UserContext from '../context/user/userContext';

import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
const CreateBar = () => {

    const Navigate = useNavigate();

    const context = useContext(UserContext)
    const { user } = context;

    const handleClick=()=>{
        Navigate(`/createpost`) 
    }
    return (
        <>{
            user &&
        
                <Card sx={{ m: 1, p: 1 }}>
                    <CardContent>
            <Stack direction='row' spacing={3} alignItems='center'>
                        <Avatar alt={user.displayName} src={user.photoURL} referrerPolicy={`no-referrer`} />
                        <TextField disabled label="Create Post" variant="outlined" sx={{width:'85%',input: { cursor: 'pointer' } }} onClick={handleClick}/>
            </Stack>
                    </CardContent>
                </Card>
}
        </>
    )
}

export default CreateBar    