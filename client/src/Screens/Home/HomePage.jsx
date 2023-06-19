import React, { useRef } from "react";
import { Box } from "@mui/material";
import WelcomeSection from "./Sections/WelcomeSection";
import OurServicesSection from "./Sections/OurServicesSection";
import AboutUsSection from "./Sections/AboutUsSection";

const HomePage = () => {
  const ourServicesRef = useRef(null);
  const aboutUsRef = useRef(null);
  return (
    <>
      <Box>
        <WelcomeSection ourServicesRef={ourServicesRef} />
        <OurServicesSection
          ourServicesRef={ourServicesRef}
          aboutUsRef={aboutUsRef}
        />
        <AboutUsSection aboutUsRef={aboutUsRef} />
      </Box>
    </>
  );
};

export default HomePage;
