import { Box, Typography } from "@mui/material";
import React from "react";

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
          height: "calc(100vh - 90px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" component="h2">
          Our Services
        </Typography>
      </Box>
    </>
  );
};

export default OurServicesSection;
