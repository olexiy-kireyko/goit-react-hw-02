import css from './Options.module.css';

const Options = ({ onUpdate, onReset, totalFeedback }) => {
  return (
    <div>
      <button className={css.options_btn} onClick={() => onUpdate('good')}>
        Good
      </button>
      <button className={css.options_btn} onClick={() => onUpdate('neutral')}>
        Neutral
      </button>
      <button className={css.options_btn} onClick={() => onUpdate('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.options_btn} onClick={() => onReset()}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
