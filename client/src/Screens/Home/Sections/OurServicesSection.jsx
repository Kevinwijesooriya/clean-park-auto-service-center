import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "../../../Common/Cards/ServiceCard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const OurServicesSection = ({ ourServicesRef, aboutUsRef }) => {
  // eslint-disable-next-line no-unused-vars
  const handleAboutUsClick = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Box
        ref={ourServicesRef}
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={3} p={3}>
          <Grid
            item
            xs={12}
            sm={12}
            p={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" component="h2">
              Why Choose Us ?
            </Typography>
            <Typography variant="h3" component="h2">
              Discover the Difference
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ServiceCard
              title="Vehicle Service"
              description="Choose from our full service or normal service options."
              services={["Full service", "Normal service"]}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ServiceCard
              title="Vehicle Check-up"
              description="We offer comprehensive check-ups for your engine, gearbox, and battery."
              services={[
                "Engine check-up",
                "Gearbox check-up",
                "Battery check-up",
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ServiceCard
              title="Vehicle Repairing"
              description="Our experts can handle engine repairs, gearbox repairs, oil changes, and battery replacements."
              services={[
                "Engine repair",
                "Gearbox repair",
                "Oil change",
                "Battery replacement",
              ]}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            p={2}
            sx={{
              display: "flex",
              flexGrow: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton onClick={() => handleAboutUsClick()}>
              <KeyboardArrowDownIcon
                sx={{ fontSize: "4rem", padding: "0.5rem" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OurServicesSection;
