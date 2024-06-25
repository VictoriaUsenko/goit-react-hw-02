import { useState, useEffect } from "react";

import "modern-normalize";
import "../../index.css";
import "./App.css";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const feedbacks = JSON.parse(
      window.localStorage.getItem("feedbacks-value")
    );
    if (feedbacks) return feedbacks;

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("feedbacks-value", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedbacks({
        ...feedbacks,
        good: 0,
        neutral: 0,
        bad: 0,
      });
    } else {
      setFeedbacks({
        ...feedbacks,
        [feedbackType]: feedbacks[feedbackType] + 1,
      });
    }
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const percentPositive =
    totalFeedback > 0 ? Math.round((feedbacks.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          percentPositive={percentPositive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
