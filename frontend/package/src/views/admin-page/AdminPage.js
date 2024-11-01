import React, { useState, useEffect } from 'react';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
// import { PageContainer, DashboardCard } from 'your-component-library'; // Adjust imports based on your project structure
import { Typography, Box, Grid } from '@mui/material';

const AdminPage = () => {

 // State to hold the data fetched from the database
 const [incidentData, setIncidentData] = useState(null);
 const [incidentTypeData, setIncidentTypeData] = useState(null);
 const [incidentSeverityData, setIncidentSeverityData] = useState(null);
 const [incidentPerMonthData, setIncidentPerMonthData] = useState(null);
 const [error, setError] = useState(null);

 // Fetch data from the database
 useEffect(() => {
   const fetchData = async () => {
     try {
       // Fetch "Number of Incidents per State" data
       const incidentResponse = await fetch('/api/incidents/states'); // Adjust API endpoint
       const incidentDataFromDB = await incidentResponse.json();
       setIncidentData(incidentDataFromDB);

       // Fetch "Top 10 Incident Types" data
       const incidentTypeResponse = await fetch('/api/incidents/types'); // Adjust API endpoint
       const incidentTypeDataFromDB = await incidentTypeResponse.json();
       setIncidentTypeData(incidentTypeDataFromDB);

       // Fetch "Number of Incidents per Severity" data
       const incidentSeverityResponse = await fetch('/api/incidents/severity'); // Adjust API endpoint
       const incidentSeverityDataFromDB = await incidentSeverityResponse.json();
       setIncidentSeverityData(incidentSeverityDataFromDB);

       // Fetch "Number of Incidents Raised per Month" data
       const incidentPerMonthResponse = await fetch('/api/incidents/monthly'); // Adjust API endpoint
       const incidentPerMonthDataFromDB = await incidentPerMonthResponse.json();
       setIncidentPerMonthData(incidentPerMonthDataFromDB);
     } catch (error) {
       console.error("Error fetching incident data:", error);
       setError("Error fetching incident data. Please try again later.");
     }
   };

   fetchData();
 }, []);

 // Check if data is available before rendering the charts
 if (!incidentData || !incidentTypeData || !incidentSeverityData || !incidentPerMonthData) {
   if (error) {
     return (
       <PageContainer title="Admin Page" description="This is the Admin page">
         <DashboardCard title="Admin Page">
           <Typography>Error: {error}</Typography>
         </DashboardCard>
       </PageContainer>
     );
   }

   return (
     <PageContainer title="Admin Page" description="This is the Admin page">
       <DashboardCard title="Admin Page">
         <Typography>Loading data...</Typography>
       </DashboardCard>
     </PageContainer>
   );
 }

  return (
    <PageContainer title="Admin Page" description="This is the Admin page">
      <DashboardCard title="Admin Page">
        <Typography variant="h4">This is an admin page</Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <PieChart
              title="Number of Incidents per State"
              data={incidentData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <PieChart
              title="Top 10 Incident Types"
              data={incidentTypeData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <PieChart
              title="Number of Incidents per Severity"
              data={incidentSeverityData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <BarChart
              title="Number of Incidents Raised per Month"
              data={incidentPerMonthData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </Grid>
        </Grid>
      </DashboardCard>
    </PageContainer>
  );
};

export default AdminPage;