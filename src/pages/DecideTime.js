import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Calendar from '../orginizerCalendar/Calendar'
import { useState } from 'react';


const themeLight = createTheme({
  palette: {
    background: {
      default: "#FFF5F8"
    }
  }
});



export default function DecideTime({
  handleChangeState,
  handleClickOnDay,
  ableDay
}) {

  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8, }} maxWidth="md">
          <Container maxWidth="sm">
            <Box
              sx={{
                bgcolor: '#F4D0DB',
                pt: 3,
                pb: 2,
              }}
            >
              <Typography
                component="h1"
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Decide Event Time
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="eventName"
                  name="eventName"
                  label="Event Name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                  label="Use this address for payment details"
                /> */}
              </Grid>
            </Grid>
            <Calendar
              handleClickOnDay={handleClickOnDay}
              ableDay={ableDay}
            />
            <Container maxWidth="sm">
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained" onClick={() => handleChangeState(4)}>Next</Button>
              </Stack>
            </Container>
          </Container>
        </Container>
      </main>
      {/* <Footor/> */}
    </ThemeProvider>
    
  );
}