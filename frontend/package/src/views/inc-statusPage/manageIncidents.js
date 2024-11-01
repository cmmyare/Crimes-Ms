import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Table, TableBody, 
  TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Select, MenuItem } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const ManageIncidents = () => {
   // Sample incident data
   const [incidents, setIncidents] = useState([
    {
      id: 1,
      date: "2024-10-31",
      time: "14:30",
      location: "Main Street",
      type: "Accident",
      evidence: "https://example.com/images/evidence1.jpg",
      status: "pending"
    }
  ]);

  const handleStatusChange = async (id, newStatus) => {
    // Simulating an API call to update the status
    console.log(`Updating incident ${id} status to ${newStatus}`);

    // Update local state to reflect status change
    const updatedIncidents = incidents.map(incident =>
      incident.id === id ? { ...incident, status: newStatus } : incident
    );
    setIncidents(updatedIncidents);
  };
 


  return (
    <PageContainer title="Manage Incidents" description="this page show as incindents status">
      <DashboardCard title="Manage Incidents">
        <Typography>this page show as incindents status</Typography>
        {/* start here */}
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
                <TableCell>Actions</TableCell>
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
                  <TableCell>
                    <Select
                      value={incident.status}
                      onChange={(e) => handleStatusChange(incident.id, e.target.value)} // Handle status change
                    >
                      <MenuItem value="pending">Pending</MenuItem>
                      <MenuItem value="in-progress">In Progress</MenuItem>
                      <MenuItem value="resolved">Resolved</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleStatusChange(incident.id, 'resolved')}>Resolve</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DashboardCard>
    </PageContainer>
  );
};

export default ManageIncidents;
