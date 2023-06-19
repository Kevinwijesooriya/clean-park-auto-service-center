import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import bannerWelcome from "../../../Assets/Images/banner02.jpg";

const WelcomeSection = ({ ourServicesRef }) => {
  const handleLearnMoreClick = () => {
    ourServicesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Grid
        container
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bannerWelcome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "calc(100vh - 90px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item container xs={12} md={6} spacing={3}>
          <Grid item xs={12} md={12}>
            <Typography variant="h2" component="h1">
              Revitalize Your Ride with Expert Care
            </Typography>
            <Typography variant="h5" component="h2" sx={{ color: "#888" }}>
              Effortless Appointments, Seamless Service Updates
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Button variant="contained" onClick={handleLearnMoreClick}>
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default WelcomeSection;
