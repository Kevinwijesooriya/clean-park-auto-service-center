import React from "react";
import { Box, Typography, Container } from "@mui/material";
import WelcomeSection from "./Sections/WelcomeSection";

const HomePage = () => {
  return (
    <Container>
      <Box>
        <WelcomeSection />
        <OurServicesSection />
        <AboutUsSection />
      </Box>
    </Container>
  );
};

const OurServicesSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" component="h2">
        Our Services
      </Typography>
    </Box>
  );
};

const AboutUsSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" component="h2">
        About Us
      </Typography>
    </Box>
  );
};

export default HomePage;
