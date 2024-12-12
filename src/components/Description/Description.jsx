import css from './Description.module.css';

const Description = () => {
  return (
    <>
      <h1 className={css.description_header}>sip happens café</h1>
      <p className={css.description_text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};

export default Description;
