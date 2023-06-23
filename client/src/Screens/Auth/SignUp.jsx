import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../firebase/manageUsers";
import { authSignUp } from "../../firebase/Services/AuthService";

const SignUp = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  const [payload, setPayload] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("SignUp ~ currentUser:", currentUser);
    if (currentUser) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeInput = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authSignUp(payload);
      console.log("authSignUp ~ response:", response);
      if (response) {
        navigate("/");
      }
    } catch (error) {
      console.log("authSignUp ~ error:", error);
    }
  };

  return (
    <>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        m={8}
        p={2}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4">
            Join our network
          </Typography>
          <Typography component="h1" variant="body1" color="#C0C0C0">
            We&apos;d love to have you!
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={(e) => handleSubmit(e)}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First name "
              name="firstName"
              autoComplete="firstName"
              autoFocus
              onChange={(e) => onChangeInput(e)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last name"
              name="lastName"
              autoComplete="lastName"
              autoFocus
              onChange={(e) => onChangeInput(e)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => onChangeInput(e)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => onChangeInput(e)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 3 }}
            >
              Sign up
            </Button>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item>
                <Typography
                  variant="body1"
                  color="#C0C0C0"
                  fontWeight="regular"
                >
                  Already have an account?{" "}
                  <Typography
                    component={Link}
                    to="/auth/"
                    variant="body1"
                    color="#fff"
                    fontWeight="medium"
                    sx={{ textDecoration: "none" }}
                  >
                    Sign in
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default SignUp;
