import React from 'react';
import { Typography,TextField, Button } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const OfficerRegister = () => {
  return (
    <PageContainer title="Officer Registration" description="this is officer Registration page">

      <DashboardCard title="Officer Registration Page">
        <Typography>This is a officer Registration page</Typography>
        <form>
          <TextField
            label="Name"
            type="text"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Telephone"
            type="tel"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit" style={{ marginTop: '16px' }}>
            Register
          </Button>
        </form>
      </DashboardCard>
    </PageContainer>
  );
};

export default OfficerRegister;
