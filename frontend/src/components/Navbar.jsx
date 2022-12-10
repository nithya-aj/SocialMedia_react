import styled from '@emotion/styled';
import { AppBar, Avatar, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React from 'react'
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { deepOrange } from '@mui/material/colors';
import { Box } from '@mui/system';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';


const Navbar = () => {
    const [open, setOpen] = useState(false)

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    });

    const Search = styled("div")(({ theme }) => ({
        backgroundColor: "#121212",
        padding: "0 10px",
        borderRadius: "4px",
        width: "30%",
        border: '1px solid white',
        alignItems: 'center',
        display: 'flex'

        // borderWidth:'medium'
    }))

    const Icons = styled(Box)(({ theme }) => ({
        backgroundColor: "#212833",
        height: "33px0",
        display: "flex",
        borderRadius: "5px",
        color: 'red',
        alignItems: "center",
    }))

    return (
        <AppBar position='sticky'>
            <StyledToolbar style={{ height: '72px', backgroundColor: "#121212" }}>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>Sparte</Typography>
                <Diversity2Icon sx={{ display: { xs: "block", sm: "none" } }}></Diversity2Icon>
                <Search><SearchIcon /><InputBase sx={{ color: "white" }} placeholder='Search...' /></Search>
                <Box sx={{ display: 'flex', alignItems: 'center' }}><LightModeIcon sx={{ paddingRight: '30px', }} /><Icons ><Typography px={'10px'} sx={{ display: { xs: "none", sm: "block" } }}>Nithya </Typography><Avatar onClick={e => setOpen(true)} sx={{ bgcolor: deepOrange[500] }} variant="rounded">N</Avatar></Icons></Box>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar