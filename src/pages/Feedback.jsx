import React from 'react';
import './feedback.css';

const Feedback = () => {
  return (
    <div className="feedback-container">
      <header className="header">
        <h1 className="serene-minds">Serene <strong>MINDS</strong></h1>
        <p className="date">Monday, 7 September 2024</p>
      </header>
      
      
      <div className="feedback-summary">
        <div className = "feedback">
          <div className="feedback-total">
          <p>Total Feedbacks</p>
          <h2>569</h2>
        </div>
        <div className="feedback-breakdown">
          <p>Positive ----------------------- 25%</p>
          <p>Neutral ----------------------- 35%</p>
          <p>Negative ---------------------- 40%</p>
        </div>
        </div>
        <div className="feedback-rating">
          <h2>4.2</h2>
          <div className="stars">
            ★★★★★
          </div>
        </div>
      </div>


      
      <div className="feedback-tabs">
        <button className="tab active">Professional</button>
        <button className="tab">Client</button>
      </div>
      
      <div className="feedback-list">
        <FeedbackItem 
          name="Anshuman Mishra" 
          title="Child Psychology" 
          feedback="Erkfewnfbdsjhbfswdhvsdhcgvhcv ew wgdgdghjschg sdjas dwdjweghdj dj wgdwgdqhwhjgQY DJDG CQJ DWQHJGDHJD HEG D DS DGSH GWJGD HJG DJ j hwd dgjh cjg cs hjghjasghjcgjsc csgcy sdcy scifsy ciusyc if l f" 
        />
        <FeedbackItem 
          name="Anshuman Mishra" 
          title="Child Psychology" 
          feedback="Erkfewnfbdsjhbfswdhvsdhcgvhcv ew wgdgdghjschg sdjas dwdjweghdj dj wgdwgdqhwhjgQY DJDG CQJ DWQHJGDHJD HEG D DS DGSH GWJGD HJG DJ j hwd dgjh cjg cs hjghjasghjcgjsc csgcy sdcy scifsy ciusyc if l f" 
        />
      </div>
    </div>
  );
};

const FeedbackItem = ({ name, title, feedback }) => (
  <div className="feedback-item">
    <div className="profile">
      <div className="profile-icon">👤</div>
      <div className="profile-details">
        <p className="name">{name}</p>
        <p className="title">{title}</p>
      </div>
    </div>
    <p className="feedback-text">{feedback}</p>
  </div>
);

export default Feedback;
