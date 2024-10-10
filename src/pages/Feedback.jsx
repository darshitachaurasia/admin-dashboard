
import { Paper, Text, Title } from '@mantine/core';
import { Sidebar } from '../components/Sidebar';
import './feedback.css'; 

function Feedback() {
  return (
    <div className="feedback-container">
      <Sidebar /> 
      <div className="feedback-content">
        <Title order={2} className="feedback-title">Feedback Overview</Title>
       
        <Paper shadow="sm" p="md" className="feedback-card">
          <Text>Total Feedbacks: 569</Text>
          <Text>Positive: 25%</Text>
          <Text>Neutral: 35%</Text>
          <Text>Negative: 40%</Text>
        </Paper>
      </div>
    </div>
  );
}

export default Feedback;
