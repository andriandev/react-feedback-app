import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button
      type={props.type}
      disabled={props.isDisabled}
      className={`btn btn-${props.version}`}
    >
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  version: 'primary',
  isDisabled: false,
};

Button.propsTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
