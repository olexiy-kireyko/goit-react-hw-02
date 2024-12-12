// import { useState } from 'react';

import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [totalFeedback, setTotalFeedback] = useState(0);

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });

    setTotalFeedback(prev => prev + 1);
    // console.log('totalFeedback', totalFeedback);
    // console.log('feedback.good', feedback.good);
    // console.log('feedback.neutral', feedback.neutral);
    // console.log('feedback.bad', feedback.bad);
    // console.log(
    //   'feedback.good +feedback.neutral + feedback.bad',
    //   feedback.good + feedback.neutral + feedback.bad
    // );
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    setTotalFeedback(0);
  };

  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback ? (
        <Feedback
          value={feedback}
          // updateFeedback={updateFeedback}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
