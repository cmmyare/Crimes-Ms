import React from 'react';
import { Typography, Grid, CardContent,TextField, Button } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import BlankCard from 'src/components/shared/BlankCard';


const TypographyPage = () => {
  return (
    <PageContainer title="Register incidents" description="this is Typography">

      <DashboardCard title="Register incidetns">
        <Typography>Registration of new incidents</Typography>
        <form>
          <TextField
            label="Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Time"
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Location"
            type="text"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Type"
            type="text"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Image"
            type="file"
            fullWidth
            margin="normal"
            inputProps={{ accept: "image/*" }}
          />
          <Button variant="contained" color="primary" type="submit" style={{ marginTop: '16px' }}>
            Submit
          </Button>
        </form>
      </DashboardCard>
      {/* <div><h1>Registraion of new incindents</h1></div> */}
    </PageContainer>
  );
};

export default TypographyPage;
