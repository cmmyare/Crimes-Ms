import React, { useState, useEffect } from 'react';
import { Typography,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const IncidentAsigned = () => {
  const [incidents, setIncidents] = useState([]);

  // Fetch incidents from the database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/incidents'); // Adjust API endpoint
        const data = await response.json();
        setIncidents(data);
      } catch (error) {
        console.error("Error fetching incidents:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <PageContainer title="Asigned Incidents" description="this is Asigned incidents">

      <DashboardCard title="Asigned Incidents">
        <Typography>This is a Asigned Incidents</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Evidence</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {incidents.map((incident) => (
                <TableRow key={incident.id}>
                  <TableCell>{incident.date}</TableCell>
                  <TableCell>{incident.time}</TableCell>
                  <TableCell>{incident.location}</TableCell>
                  <TableCell>{incident.type}</TableCell>
                  <TableCell>
                    <img src={incident.evidence} alt="Evidence" style={{ width: '50px', height: '50px' }} />
                  </TableCell>
                  <TableCell>{incident.status}</TableCell> {/* Displaying the current status */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DashboardCard>
    </PageContainer>
  );
};

export default IncidentAsigned;
