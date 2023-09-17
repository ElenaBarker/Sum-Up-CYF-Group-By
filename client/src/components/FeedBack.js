import React, { useEffect, useState } from "react";
import axios from "axios";

function FeedBack() {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    try {
      const getFeedbackList = async () => {
        const list = await axios.get("http://localhost:5500/feedback");
        setFeedbackList(list.data);
      };

      getFeedbackList();
    } catch (error) {
      console.log({ error });
    }
  }, []);

  return (
    console.log(feedbackList),
    (
      <div className="h-screen pt-10 text-black font-bold bg-black">
        {feedbackList.map((data) => (
          <div className="container mx-auto feedback">
            <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2 feedback2">
              <h3>{data.username}</h3>
              <h3>{data.message}</h3>
              <h3>{data.category}</h3>
              <h3>{data.cohort}</h3>
              <h3>{data.votes}</h3>
            </div>
          </div>
        ))}
      </div>
    )
  );
}

export default FeedBack;
