import React from 'react';
import {
  Typography,
  Container,
  Fab
} from '@material-ui/core';


function Login() {
  return (
    <div>
      <Container fixed>
        <Typography variant="h4" style={{ marginBottom: '1em' }}>
          Login
        </Typography>
        <Fab variant="extended" href="asdsdsa" color="primary" aria-label="Add" style={{margin: "10px"}}>
          Login with SCB
        </Fab>
      </Container>
    </div>
  );
}

export default Login;
