import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import WindowIcon from '@mui/icons-material/Window';

const Sidebar = () => {
  return (
    <Box bgcolor="grey" flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <WindowIcon />
            </ListItemIcon>
            <ListItemText primary="Feed" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default Sidebar