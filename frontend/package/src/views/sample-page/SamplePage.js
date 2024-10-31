import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">

      <DashboardCard title="Sample Page">
        <Typography>remember Comon pages</Typography>
        <p>src/layouts/sidebar/full/sidebarItems</p>
        <p>src/routes/Router</p>
        <h2>panel pages</h2>
        <p>src/views/Remember each file has own folder</p>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
