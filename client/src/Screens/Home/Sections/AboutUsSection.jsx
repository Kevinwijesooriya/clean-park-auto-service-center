import { Box, Typography } from "@mui/material";
import React from "react";

const AboutUsSection = ({ aboutUsRef }) => {
  return (
    <Box
      ref={aboutUsRef}
      sx={{
        height: "calc(100vh - 90px)",
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
