// @mui material components
import Link from "@mui/material/Link";
import { Box, Divider, IconButton, Typography, styled } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import logoImage from "../../Assets/Images/logomain.png";

const CustomLink = styled(Link)({
  textDecoration: "none",
  padding: "2rem",
});
const CustomIconButton = styled(IconButton)({
  marginRight: "2rem",
});

function MainFooter() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#272727",
        padding: "3rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Typography variant="h6" component="div">
            <img src={logoImage} alt="Logo" style={{ height: 60 }} />
          </Typography>
          <Typography variant="h6" component="div" sx={{ marginLeft: "8px" }}>
            Clean Park Auto Service
          </Typography>
        </Box>
        <Box>
          <CustomLink color="#fff" href="#">
            Home
          </CustomLink>
          |
          <CustomLink color="#fff" href="#">
            About
          </CustomLink>
          |
          <CustomLink color="#fff" href="#">
            Services
          </CustomLink>
          |
          <CustomLink color="#fff" href="#">
            Contact
          </CustomLink>
        </Box>
      </Box>
      <Divider sx={{ marginBottom: "1rem" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" component="div">
          &copy; {new Date().getFullYear()} Clean Park Auto Service. All rights
          reserved.
        </Typography>
        <Box>
          <CustomIconButton>
            <TwitterIcon />
          </CustomIconButton>
          <CustomIconButton>
            <FacebookIcon />
          </CustomIconButton>
          <CustomIconButton>
            <InstagramIcon />
          </CustomIconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default MainFooter;
