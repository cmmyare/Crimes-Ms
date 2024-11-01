import React, { useState } from 'react';
import { Typography,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select, MenuItem, Button } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const ManageOfficer = () => {
   // Sample incident data
   const [incidents, setIncidents] = useState([
    {
      id: 1,
      date: "2024-10-31",
      time: "14:30",
      location: "Main Street",
      type: "Accident",
      evidence: "https://example.com/images/evidence1.jpg",
      status: "pending",
      assignedOfficer: "" // Officer assigned to the incident
    }
  ]);

  // Sample officers for assignment
  const officers = [
    { id: 1, name: "Officer A" },
    { id: 2, name: "Officer B" },
    { id: 3, name: "Officer C" }
  ];

  const handleStatusChange = async (id, newStatus) => {
    console.log(`Updating incident ${id} status to ${newStatus}`);
    const updatedIncidents = incidents.map(incident =>
      incident.id === id ? { ...incident, status: newStatus } : incident
    );
    setIncidents(updatedIncidents);
  };

  const handleAssignOfficer = (id, officerId) => {
    console.log(`Assigning officer ${officerId} to incident ${id}`);
    const updatedIncidents = incidents.map(incident =>
      incident.id === id ? { ...incident, assignedOfficer: officerId } : incident
    );
    setIncidents(updatedIncidents);
  };
  return (
    <PageContainer title="Manage Officer" description="this is officer management page">

      <DashboardCard title="officer management Page">
        <Typography>This is a officer management page</Typography>
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
                <TableCell>Assign Officer</TableCell>
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
                    <Select
                      value={incident.assignedOfficer}
                      onChange={(e) => handleAssignOfficer(incident.id, e.target.value)} // Handle officer assignment
                    >
                      <MenuItem value="">None</MenuItem>
                      {officers.map(officer => (
                        <MenuItem key={officer.id} value={officer.id}>{officer.name}</MenuItem>
                      ))}
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

export default ManageOfficer;
