import React from "react";
import { Box, Checkbox, Grid, Typography } from "@mui/material";

const ServiceTypeSelector = ({ selectedServices, setSelectedServices }) => {
  const handleServiceChange = (event) => {
    setSelectedServices({
      ...selectedServices,
      vehicleService: event.target.value,
    });
  };

  const handleCheckupChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedServices((prevState) => ({
        ...prevState,
        vehicleCheckup: [...prevState.vehicleCheckup, value],
      }));
    } else {
      setSelectedServices((prevState) => ({
        ...prevState,
        vehicleCheckup: prevState.vehicleCheckup.filter(
          (item) => item !== value
        ),
      }));
    }
  };

  const handleRepairingChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedServices((prevState) => ({
        ...prevState,
        vehicleRepairing: [...prevState.vehicleRepairing, value],
      }));
    } else {
      setSelectedServices((prevState) => ({
        ...prevState,
        vehicleRepairing: prevState.vehicleRepairing.filter(
          (item) => item !== value
        ),
      }));
    }
  };

  return (
    <>
      <Grid item xs={12} md={4}>
        <Box sx={{ outline: "red dashed 1px" }}>
          <Typography variant="subtitle1">Vehicle Service</Typography>
          <Checkbox
            checked={selectedServices.vehicleService === "Full service"}
            onChange={handleServiceChange}
            value="Full service"
          />
          Full service
          <Checkbox
            checked={selectedServices.vehicleService === "Normal service"}
            onChange={handleServiceChange}
            value="Normal service"
          />
          Normal service
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="subtitle1">Vehicle Check-up</Typography>
        <Checkbox
          checked={selectedServices.vehicleCheckup.includes("Engine")}
          onChange={handleCheckupChange}
          value="Engine"
        />
        Engine
        <Checkbox
          checked={selectedServices.vehicleCheckup.includes("Gear box")}
          onChange={handleCheckupChange}
          value="Gear box"
        />
        Gear box
        <Checkbox
          checked={selectedServices.vehicleCheckup.includes("Battery")}
          onChange={handleCheckupChange}
          value="Battery"
        />
        Battery
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="subtitle1">Vehicle Repairing</Typography>
        <Checkbox
          checked={selectedServices.vehicleRepairing.includes("Engine")}
          onChange={handleRepairingChange}
          value="Engine"
        />
        Engine
        <Checkbox
          checked={selectedServices.vehicleRepairing.includes("Gear box")}
          onChange={handleRepairingChange}
          value="Gear box"
        />
        Gear box
        <Checkbox
          checked={selectedServices.vehicleRepairing.includes("Oil")}
          onChange={handleRepairingChange}
          value="Oil"
        />
        Oil
        <Checkbox
          checked={selectedServices.vehicleRepairing.includes("Battery")}
          onChange={handleRepairingChange}
          value="Battery"
        />
        Battery
      </Grid>
    </>
  );
};

export default ServiceTypeSelector;
