import { Box, Button, Stack } from '@mui/material'
import React from 'react'

const Tags = (props) => {
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Stack >
                    {props.tags.map((tag) => {
                        return (
                            <Button variant='text' onClick={() => {
                                props.getPosts(tag)
                            }
                            } key={tag._id} sx={{
                                color: 'black',
                                '--Grid-borderWidth': '1px',
                                borderTop: 'var(--Grid-borderWidth) solid',
                                borderLeft: 'var(--Grid-borderWidth) solid',
                                borderRight: 'var(--Grid-borderWidth) solid',
                                borderBottom: 'var(--Grid-borderWidth) solid',
                                borderColor: 'divider',
                            }}>{tag.name}</Button>

                        )
                    })}
                </Stack>
            </Box>

        </>
    )
}

export default Tags