import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Demo = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} sx={{ outline: "red dashed 1px" }}>
            <Typography>Grid 1 Grid 1 Grid 1</Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ outline: "red dashed 1px" }}>
            <Typography>Grid 2 Grid 1 Grid 1</Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ outline: "red dashed 1px" }}>
            <Typography>Grid 3 Grid 1 Grid 1</Typography>
          </Grid>
          <Grid item xs={12} sm={3} sx={{ outline: "red dashed 1px" }}>
            <Typography>Grid 4 Grid 1 Grid 1</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Demo;
