import React from "react";
import {
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import EventIcon from "@mui/icons-material/AccessTime";
import SettingsIcon from "@mui/icons-material/Settings";

const MyAppointments = () => {
  const appointments = [
    { id: 1, primary: "Appointment 1", secondary: "Secondary text 1" },
    { id: 2, primary: "Appointment 2", secondary: "Secondary text 2" },
    { id: 3, primary: "Appointment 3", secondary: "Secondary text 3" },
    { id: 4, primary: "Appointment 4", secondary: "Secondary text 4" },
    { id: 5, primary: "Appointment 5", secondary: "Secondary text 5" },
  ];
  return (
    <>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        m={8}
        p={2}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4">
            My appointments
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
            }} 
          >
            <List dense={false}>
              {appointments.map((appointment) => (
                <ListItem
                  key={appointment.id}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <SettingsIcon />
                    </IconButton>
                  }
                  sx={{ width: "100%" }} // Expand the list item to full width
                >
                  <ListItemIcon>
                    <EventIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={appointment.primary}
                    secondary={appointment.secondary}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default MyAppointments;
