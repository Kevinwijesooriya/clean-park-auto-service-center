import { Box, Typography } from "@mui/material";
import React from "react";

const AboutUsSection = ({ aboutUsRef }) => {
  return (
    <Box
      ref={aboutUsRef}
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

export default AboutUsSection;
