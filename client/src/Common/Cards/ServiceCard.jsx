import React from "react";
import { Box, Typography } from "@mui/material";
import backgroundImg from "../../Assets/Images/banner02.jpg";
const ServiceCard = ({ title, description, services }) => {
  return (
    <>
      <Box
        sx={{
          //   backgroundColor: "#272727",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${backgroundImg})`,
          padding: 4,
          borderRadius: 3,
          height: "100%",
        }}
      >
        <Typography variant="h5" component="h2" sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          {description}
        </Typography>
        <ul>
          {services.map((service) => (
            <li key={service}>
              <Typography variant="body2">{service}</Typography>
            </li>
          ))}
        </ul>
      </Box>
    </>
  );
};

export default ServiceCard;
