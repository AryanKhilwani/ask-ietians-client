import { Card, CardContent, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';
import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const SortBar = (props) => {

    const [alignment, setAlignment] = React.useState('best');

    const handleChange = (e, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
            // console.log(e.target.value)
        }
    };
    return (
        <>
            <Box>
                <Card sx={{ m: 1, pl: 1 }}>
                    <CardContent>
                        {/* <Stack direction="row" spacing={2}>
                            <Button variant="outlined" color="success" startIcon={<TrendingUpIcon color='success'/>} >
                                Top
                            </Button>
                            <Button variant="outlined" startIcon={<AccessTimeFilledIcon />}>
                                New
                            </Button>
                        </Stack> */}
                        <ToggleButtonGroup
                            color="standard"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                        >
                            <ToggleButton value="best" color='success' onClick={props.hot}>
                                <Box>

                                <Stack direction='row' spacing={1}>
                                <TrendingUpIcon />
                                <Typography>
                                Best
                                </Typography>
                                </Stack>
                                </Box>
                            </ToggleButton>
                            <ToggleButton value="new" color='primary' onClick={props.new}>
                            <Stack direction='row' spacing={1}>
                                <AccessTimeFilledIcon />
                                <Typography>
                                New
                                </Typography>
                                
                                </Stack>
                                </ToggleButton>
                        </ToggleButtonGroup>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default SortBar