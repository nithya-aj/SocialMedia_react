import { Box, Stack } from '@mui/material'
import React from 'react'
import FeedLeft from './FeedLeft'
import FeedRight from './FeedRight'
import PropTypes from 'prop-types';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};


const Feed = () => {
    return (
        <>
            <Box bgcolor="#212833" flex={4} p={2} sx={{ borderRadius: '12px 12px 0px 0px' }}>
                <div style={{ width: '100%' }}>
                    <Box sx={{ display: 'flex', borderColor:'#121212'}}>
                        <Item sx={{ width: '100%', backgroundColor:'#121212', borderColor:'#121212'}}><FeedLeft></FeedLeft></Item>
                        <Item sx={{ width:'50%', backgroundColor:'#212833', borderColor:'#212833'}}><FeedRight></FeedRight></Item>
                    </Box>
                </div>
            </Box>
        </>
    )
}

export default Feed