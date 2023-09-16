import React, { useEffect, useState } from "react";

const getFeedbackList = () => {
  return [
    {
      userName: "Beko",
      message: "This is a test",
      category: "HTML",
      cohort: "London 10",
      votes: 0,
    },
    {
      userName: "Elena",
      message: "This is a second test",
      category: "HTML",
      cohort: "London 10",
      votes: 0,
    },
  ];
};

function FeedBack() {
  const [feedbackList, setFeedbackList] = useState({});

  useEffect(() => {
    setFeedbackList(getFeedbackList());
  }, []);

  return (
    <div className="h-screen pt-10 text-black font-bold bg-black">
      {feedbackList.map((data) => (
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2">
            <h3>{data.userName}</h3>
            <h3>{data.message}</h3>
            <h3>{data.category}</h3>
            <h3>{data.cohort}</h3>
            <h3>{data.votes}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedBack;
