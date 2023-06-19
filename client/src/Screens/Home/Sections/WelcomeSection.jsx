import { Box, Typography } from "@mui/material";
import React from "react";

const WelcomeSection = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" component="h1" sx={{ fontWeight: "bold" }}>
          Welcome to Our Website
        </Typography>
      </Box>
    </>
  );
};

export default WelcomeSection;
