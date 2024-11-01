import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const IncidentDetail = () => {
  return (
    <PageContainer title="Incidents Detail" description="this is details about the incidents">

      <DashboardCard title="Incidents Details">
        <Typography>This is details about the Incidents</Typography>
        
      </DashboardCard>
    </PageContainer>
  );
};

export default IncidentDetail;
