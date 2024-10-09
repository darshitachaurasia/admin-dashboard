// src/pages/Dashboard.jsx

import { Paper, Group, Title, Text } from '@mantine/core';
import { Sidebar } from '../components/Sidebar';
import './dashboard.css'; 
export function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Title order={2} className="dashboard-title">
          Dashboard Overview
        </Title>

        <Group className="dashboard-stats">
          <Paper className="dashboard-card" shadow="sm" radius="md" p="xl">
            <Text>Total Feedbacks</Text>
            <Title order={1}>569</Title>
          </Paper>
          <Paper className="dashboard-card" shadow="sm" radius="md" p="xl">
            <Text>Positive Feedback</Text>
            <Title order={1}>25%</Title>
          </Paper>
          <Paper className="dashboard-card" shadow="sm" radius="md" p="xl">
            <Text>Neutral Feedback</Text>
            <Title order={1}>35%</Title>
          </Paper>
          <Paper className="dashboard-card" shadow="sm" radius="md" p="xl">
            <Text>Negative Feedback</Text>
            <Title order={1}>40%</Title>
          </Paper>
        </Group>
      </div>
    </div>
  );
}
