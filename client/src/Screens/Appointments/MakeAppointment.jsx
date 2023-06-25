import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import ServiceTypeSelector from "./Components/ServiceTypeSelector";
import { addAppointment } from "../../firebase/Services/AppointmentService";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../firebase/manageUsers";

const MakeAppointment = () => {
  const navigate = useNavigate();

  const user = getCurrentUser();

  const [date, setDate] = useState(dayjs("2022-04-17"));
  const [time, setTime] = useState(dayjs("2022-04-17T15:30"));
  const [selectedServices, setSelectedServices] = useState({
    vehicleService: "",
    vehicleCheckup: [],
    vehicleRepairing: [],
  });
  const [payload, setPayload] = useState({
    vehicleType: "",
    vehicleNumber: "",
    contactNumber: "",
    note: "",
    status: "pending",
    date,
    time,
    selectedServices,
    userId: "",
  });

  const dateValue = date.format("YYYY-MM-DD"); // Format the date as YYYY-MM-DD
  const timeValue = time.format("HH:mm"); // Format the time as HH:mm

  const onChangeInput = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setPayload((prevPayload) => ({
      ...prevPayload,
      date: dateValue,
      time: timeValue,
      selectedServices,
      userId: user?.uid,
    }));
  }, [date, time, selectedServices, dateValue, timeValue, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addAppointment(payload);
      console.log("addAppointment ~ response:", response);
      if (response) {
        navigate("/appointment/list");
      }
    } catch (error) {
      console.log("addAppointment ~ error:", error);
    }
  };

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
            Make an appointment
          </Typography>
          <Typography component="h1" variant="body1" color="#C0C0C0">
            Tell us how you like it!
          </Typography>
          <Grid
            spacing={2}
            container
            component="form"
            noValidate
            onSubmit={(e) => handleSubmit(e)}
            sx={{ mt: 1 }}
          >
            <Grid item xs={12} md={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="vehicleType"
                label="Vehicle type "
                name="vehicleType"
                autoFocus
                onChange={(e) => onChangeInput(e)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="vehicleNumber"
                label="Vehicle number"
                name="vehicleNumber"
                autoFocus
                onChange={(e) => onChangeInput(e)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="contactNumber"
                label="Contact number"
                name="contactNumber"
                autoFocus
                onChange={(e) => onChangeInput(e)}
              />
            </Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}>
              <DatePicker
                fullWidth
                label="Date"
                value={date}
                onChange={(newDate) => setDate(newDate)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TimePicker
                fullWidth
                label="Time"
                value={time}
                onChange={(newTime) => setTime(newTime)}
              />
            </Grid>
            <ServiceTypeSelector
              selectedServices={selectedServices}
              setSelectedServices={setSelectedServices}
            />

            <Grid item xs={12} md={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="note"
                label="Leave a note"
                id="note"
                onChange={(e) => onChangeInput(e)}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 3 }}
            >
              Book now
            </Button>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default MakeAppointment;
