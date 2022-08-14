import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = (props) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Delete feedback ?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };

  // Update feedback
  const updateFeedback = (id, updItem) => {
    setFeedbackEdit({
      item: {},
      edit: false,
    });
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback, // feedback: feedback,
        addFeedback, // addFeedback: addFeedback
        deleteFeedback, // deleteFeedback: deleteFeedback
        editFeedback, // editFeedback: editFeedback
        feedbackEdit, // feedbackEdit: feedbackEdit,
        updateFeedback, // updateFeedback: updateFeedback
      }}
    >
      {props.children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
