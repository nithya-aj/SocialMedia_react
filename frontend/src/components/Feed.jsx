import { Box, Stack } from '@mui/material'
import React from 'react'
import FeedLeft from './FeedLeft'
import FeedRight from './FeedRight'

const Feed = () => {
    return (
        <>
            <Box bgcolor="#212833" flex={4} p={2} sx={{ borderRadius: '12px 12px 0px 0px' }}>
                <Stack direction={"row"} justifyContent="space-between" spacing={2}>
                    <FeedLeft />
                    <FeedRight />
                </Stack>
            </Box>
        </>
    )
}

export default Feed