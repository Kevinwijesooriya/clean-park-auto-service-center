import React from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

const AppointmentCard = ({ appointment }) => {
  const {
    vehicleType,
    vehicleNumber,
    contactNumber,
    note,
    status,
    date,
    time,
    selectedServices,
  } = appointment;

  const handleEdit = () => {
    // Handle edit functionality
  };

  const handleDelete = () => {
    // Handle delete functionality
  };
  const getStatusColor = () => {
    switch (status) {
      case "pending":
        return "warning";
      case "accepted":
        return "success";
      case "rejected":
        return "error";
      case "processing":
        return "info"; // Replace "suitable-color" with the desired color for the "processing" status
      default:
        return "info"; // Replace "default" with the default color variant you want to use
    }
  };

  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Chip label={status} color={getStatusColor()} />
              <Box>
                <IconButton onClick={handleEdit} size="small">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={handleDelete} size="small">
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="elevation">
              <CardContent>
                <Typography variant="body2" color={"#C0C0C0"}>
                  Vehicle Type
                </Typography>
                <Typography variant="body1">{vehicleType}</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card variant="elevation">
              <CardContent>
                <Typography variant="body2" color={"#C0C0C0"}>
                  Vehicle Number
                </Typography>
                <Typography variant="body1">{vehicleNumber}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="elevation">
              <CardContent>
                <Typography variant="body2" color={"#C0C0C0"}>
                  Contact Number
                </Typography>
                <Typography variant="body1">{contactNumber}</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card variant="elevation">
              <CardContent>
                <Typography variant="body2" color={"#C0C0C0"}>
                  Date
                </Typography>
                <Typography variant="body1">{date}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card variant="elevation">
              <CardContent>
                <Typography variant="body2" color={"#C0C0C0"}>
                  Time
                </Typography>
                <Typography variant="body1"> {time}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card variant="elevation">
              <CardContent>
                <Box>
                  <Typography variant="body2" color={"#C0C0C0"}>
                    Selected Services:
                  </Typography>
                  <Box ml={2}>
                    <Typography variant="body1">
                      Service: {selectedServices.vehicleService}
                    </Typography>
                    <Typography variant="body1">
                      Repairing:{" "}
                      {selectedServices.vehicleRepairing.map(
                        (repair) => repair
                      )}
                    </Typography>
                    <Typography variant="body1">
                      Checkup:{" "}
                      {selectedServices.vehicleCheckup.map(
                        (checkup) => checkup
                      )}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card variant="elevation">
              <CardContent>
                <Typography variant="body2" color={"#C0C0C0"}>
                  Notes
                </Typography>
                <Typography variant="body1">{note}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;
