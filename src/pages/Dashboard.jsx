
import { Title, Paper, Text } from '@mantine/core';
import './dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Title order={2} className="dashboard-title">Dashboard Overview</Title>
      <Paper shadow="sm" radius="md" p="md" className="dashboard-card">
        <Text>Welcome to the Dashboard!</Text>
        <Text>This is your overview section.</Text>
      </Paper>
    </div>
  );
}

export default Dashboard;

