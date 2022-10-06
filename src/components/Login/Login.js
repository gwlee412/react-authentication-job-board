import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { BoxContainer, PrimaryButton, LoginBox } from "./StyledLogin";

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }


export default function Login( {setToken} ) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }

  return (
    <BoxContainer>
      <LoginBox>
        <form onSubmit = {handleSubmit}>
        <Typography sx={{ margin: "25px" }} variant="h5" gutterBottom>
          Log in
        </Typography>
        <TextField
          sx={{ width: "65%" }}
          id="email"
          label="Username or Email"
          type='text'
          variant="outlined"
          onChange={e => setUserName(e.target.value)}
        />
        <TextField
          sx={{ width: "65%", marginTop: "20px" }}
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <PrimaryButton
          variant="contained"
          type="submit"
        >
          Login
        </PrimaryButton>
        </form>
      </LoginBox>
    </BoxContainer>
  );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }