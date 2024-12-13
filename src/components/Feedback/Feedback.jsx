import css from './Feedback.module.css';

const Feedback = ({ value, totalFeedback, positiveFeedback }) => {
  return (
    <div className={css.feedback}>
      <p>Good: {value.good}</p>
      <p>Neutral: {value.neutral}</p>
      <p>Bad: {value.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback} %</p>
    </div>
  );
};

export default Feedback;
