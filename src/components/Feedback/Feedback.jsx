import css from "./Feedback.module.css";

export default function Feedback({
  feedbacks,
  totalFeedback,
  percentPositive,
}) {
  const { good, neutral, bad } = feedbacks;
  console.log(feedbacks);
  console.log(good);

  return (
    <div className={css.feedbackWrap}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {percentPositive}%</p>
    </div>
  );
}
