import PropTypes from "prop-types";

Notification.propTypes = {
  message: PropTypes.string,
  visible: PropTypes.bool,
};

export default function Notification({ message, visible }) {
  return (
    <div className={`notification ${visible ? "show" : ""}`}>{message}</div>
  );
}
