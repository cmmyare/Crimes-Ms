import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const IncidentAsigned = () => {
  return (
    <PageContainer title="Asigned Incidents" description="this is Asigned incidents">

      <DashboardCard title="Asigned Incidents">
        <Typography>This is a Asigned Incidents</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default IncidentAsigned;
