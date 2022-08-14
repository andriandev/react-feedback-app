import { useContext } from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem(props) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{props.item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(props.item.id)}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
      <button className="edit" onClick={() => editFeedback(props.item)}>
        <i className="fa-regular fa-pen-to-square"></i>
      </button>
      <div className="text-display">{props.item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
