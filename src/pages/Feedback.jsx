
import { Paper, Text, Group,  Title } from '@mantine/core';
import { Sidebar } from '../components/Sidebar';
import './feedback.css'; 
function Feedback() {
  return (
    <div className="feedback-container">
      <Sidebar />
      <div className="feedback-content">
        <Title order={2} className="feedback-title">Feedback Overview</Title>
        <Paper shadow="sm" radius="md" p="xl" withBorder className="feedback-card">
          <Group position="apart">
            <Text>Total Feedbacks</Text>
            <Text>569</Text>
          </Group>
          <Group position="apart">
            <Text>Positive</Text>
            <Text>25%</Text>
          </Group>
          <Group position="apart">
            <Text>Neutral</Text>
            <Text>35%</Text>
          </Group>
          <Group position="apart">
            <Text>Negative</Text>
            <Text>40%</Text>
          </Group>
        </Paper>
      </div>
    </div>
  );
}

export default Feedback;
