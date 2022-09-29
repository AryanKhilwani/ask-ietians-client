import React from 'react'

import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';


const Postreply = () => {
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleClick=()=>{
        console.log(value)
    }
    return (
        <Stack spacing={2} alignItems='center'>
            <TextField
            id="outlined-multiline-flexible"
            fullWidth
            multiline
            rows={4}
            value={value}
            onChange={handleChange}/>
            <Button variant='contained' sx={{maxWidth:'10%'}} onClick={handleClick}>
                Reply
            </Button>
        </Stack>
    )
}

export default Postreply