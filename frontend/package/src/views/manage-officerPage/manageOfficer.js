import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const ManageOfficer = () => {
  return (
    <PageContainer title="Manage Officer" description="this is officer management page">

      <DashboardCard title="officer management Page">
        <Typography>This is a officer management page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default ManageOfficer;
