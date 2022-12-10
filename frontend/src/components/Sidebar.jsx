import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import WindowIcon from '@mui/icons-material/Window';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <Box bgcolor="#121212" color={'white'} flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <WindowIcon sx={{color:"white"}}/>
            </ListItemIcon>
            <ListItemText primary="Feed" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#messages">
            <ListItemIcon>
              <MessageIcon sx={{color:"white"}}/>
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#notifications">
            <ListItemIcon>
              <NotificationsActiveIcon sx={{color:"white"}}/>
            </ListItemIcon >
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#connections">
            <ListItemIcon>
              <GroupIcon sx={{color:"white"}}/>
            </ListItemIcon>
            <ListItemText primary="Connections" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#profile">
            <ListItemIcon>
              <PersonIcon sx={{color:"white"}}/>
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#logout">
            <ListItemIcon>
              <LogoutIcon sx={{color:"white"}}/>
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>

    </Box>
  )
}

export default Sidebar