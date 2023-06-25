import React, { useEffect, useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { getMyAppointments } from "../../firebase/Services/AppointmentService";
import AppointmentCard from "./Components/AppointmentCard";
import { getCurrentUser } from "../../firebase/manageUsers";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const user = getCurrentUser();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointmentsArray = await getMyAppointments(user.uid);
        setAppointments(appointmentsArray);
      } catch (error) {
        console.log("fetchAppointments ~ error:", error);
      }
    };
    fetchAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            {appointments.map((appointment) => (
              <>
                <AppointmentCard appointment={appointment} />
              </>
            ))}
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default MyAppointments;
