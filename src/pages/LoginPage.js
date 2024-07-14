import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function LoginPage() {
  return (
    <div style={{ background: "#f7f7f7", height: "100vh" }}>
      <Container>
        <Grid
          container
          alignItems={"center"}
          height={"100vh"}
          justifyContent={"center"}
          spacing={2}
        >
          <Grid item md={6} xs={12}>
            <Paper sx={{ borderRadius: "20px", padding: "20px" }}>
              <Stack spacing={2}>
                <TextField size="small" label={"user email"} />
                <TextField type="password" size="small" label={"Password"} />
                <Button variant="contained">login</Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default LoginPage;
