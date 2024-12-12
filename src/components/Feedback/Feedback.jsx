import css from './Feedback.module.css';

const Feedback = ({ value, totalFeedback }) => {
  return (
    <div className={css.feedback}>
      <p>Good: {value.good}</p>
      <p>Neutral: {value.neutral}</p>
      <p>Bad: {value.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {Math.round((value.good / totalFeedback) * 100)} %</p>
    </div>
  );
};

export default Feedback;
