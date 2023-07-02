import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "../../../Common/Cards/ServiceCard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ServicesCarousel } from "../../../Common/Carousels/ServicesCarousel";

const OurServicesSection = ({ ourServicesRef, aboutUsRef }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
          <Grid item xs={12} sm={12}>
            <ServicesCarousel />
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
