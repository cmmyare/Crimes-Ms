import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const ManageIncidents = () => {
  return (
    <PageContainer title="Manage Incidents" description="this page show as incindents status">

      <DashboardCard title="Manage Incidents">
        <Typography>this page show as incindents status</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default ManageIncidents;
