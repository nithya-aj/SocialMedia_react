import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'


const FeedLeft = () => {

    return (
        <Box flex={8} p={2} sx={{ borderRadius: '15px', justifyContent: 'space-between' }}>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </Box>
    )
}
export default FeedLeft