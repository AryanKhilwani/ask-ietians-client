import { Box, Button, Card, CardContent } from '@mui/material'

import Grid from '@mui/material/Unstable_Grid2';
import React from 'react'

const Tags = (props) => {
    return (
        <>
            <Box sx={{flexGrow: 1  }}>
                <Card >
                    <CardContent>

                        {/* <Stack  spacing={0.3} sx={{m:1}}> */}
                        <Grid container spacing={1}>
                            
                            {props.tags.map((tag) => {
                                return (
                                    <Grid key={tag._id} >


                                    <Button variant='outlined' onClick={() => {
                                        props.getPosts(tag)
                                    }
                                    } sx={{
                                        color: 'black',
                                        '--Grid-borderWidth': '1px',
                                        borderTop: 'var(--Grid-borderWidth) solid',
                                        borderLeft: 'var(--Grid-borderWidth) solid',
                                        borderRight: 'var(--Grid-borderWidth) solid',
                                        borderBottom: 'var(--Grid-borderWidth) solid',
                                        borderColor: 'divider',
                                    }}>
                                        {tag.name}
                                    </Button>

                                        </Grid>
                                )
                            })}
                            
                        </Grid>
                        {/* </Stack> */}
                    </CardContent>
                </Card>
            </Box>

        </>
    )
}

export default Tags