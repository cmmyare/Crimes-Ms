import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const AdminPage = () => {
  return (
    <PageContainer title="admin Page" description="this is Admin page">

      <DashboardCard title="admin Page">
        <Typography>This is a admin page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default AdminPage;
