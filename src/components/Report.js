import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Divider, IconButton } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import { Container, Stack } from '@mui/system';

import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import { FormControl } from '@mui/material'
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 2,
};

export default function BasicModal(props) {

    const HOST = `${process.env.REACT_APP_APIURI}/${props.of}`
    const handleClose = () => props.setOpen(false);
    const [report, setReport] = useState('')
    const handleSubmit = async () => {
        handleClose();
        fetch(`${HOST}/report/${props.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('x-auth-token')
            }, body: JSON.stringify(report)
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
            }).catch((r)=>console.log(r));
    }
    const handleChange = (e) => {
        setReport({ ...report, [e.target.name]: e.target.value })

    }


    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            {/* {props.of}
            {props.id} */}
            <Modal
                open={props.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Stack direction='row' justifyContent="space-between" alignItems='center'>
                        <Typography>
                            Submit a report
                        </Typography>
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </Stack>
                    <Divider/>
                        <Typography variant='subtitle2' sx={{mt:5, ml:0.2}}>
                            why are you reporting this, let us know and we'll look into it.
                        </Typography>
                    <Stack spacing={2} alignItems='center' sx={{mt:1}}>
                        <TextField fullWidth label="Message" id="message" name='message' onChange={handleChange}/>
                        <Button color='error' variant='contained' endIcon={<FlagIcon />} onClick={handleSubmit}>
                            Report
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}