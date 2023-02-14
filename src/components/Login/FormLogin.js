import styled from "@emotion/styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getApiLogin } from "../../containers/LoginPage/actions";

// Styled component
const Container = styled("div")({
  backgroundColor: "#edf0f5",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const LoginForm = styled("div")({
  width: "86%",
  backgroundColor: "white",
  margin: "0 auto",
  padding: 30,
  borderRadius: 5,
});

const Title = styled("div")({
  textAlign: "center",
});

const Welcome = styled("div")(() => ({
  color: "#04aa6d",
  fontSize: 24,
  fontWeight: 700,
  marginBottom: 5,
}));

const Subtitle = styled("div")({
  marginBottom: 25,
});

function FormLogin(props) {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const { invalidLogin } = useSelector((state) => state.loginPageReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle events click
  const handleSubmitForm = (values) => {
    try {
      dispatch(getApiLogin(values));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <LoginForm>
        <Title>
          <Welcome>Welcome Back</Welcome>
          <Subtitle>Login with your username & password</Subtitle>
        </Title>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="username-input"
            label="Username"
            variant="outlined"
            color="primary"
            fullWidth
            {...register("username", { required: true })}
            error={errors.username && true}
          />
          {errors.username && (
            <Typography color="secondary" variant="subtitle1">
              Username is required
            </Typography>
          )}

          <TextField
            id="password-input"
            label="Password"
            variant="outlined"
            color="primary"
            fullWidth
            margin="normal"
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
            error={errors.password && true}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {errors.password && (
            <Typography variant="subtitle1" color="secondary">
              Password is required
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            style={{ marginTop: "25px" }}
          >
            Login
          </Button>
        </form>
      </LoginForm>

      {invalidLogin && (
        <Alert severity="error">
          The username or password is incorrect.
          <br /> Please try again.
        </Alert>
      )}
    </Container>
  );
}

export default FormLogin;
