import React from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { authSignOut } from "../../firebase/Services/AuthService";

const UserDropdownMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSettingsClick = () => {
    // Handle settings click
    // Example: redirect to settings page
  };

  const handleLogoutClick = () => {
    authSignOut();
  };

  return (
    <Box>
      <IconButton onClick={handleMenuOpen} color="inherit">
        <PersonIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleSettingsClick}>
          <SettingsIcon sx={{ marginRight: 1 }} />
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogoutClick}>
          <LogoutIcon sx={{ marginRight: 1 }} />
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserDropdownMenu;
