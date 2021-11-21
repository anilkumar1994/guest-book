import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

export default function Messages({ messages }) {
  console.log(messages, "messages");
  return (
    <>
      <h2>Messages</h2>
      {messages.map((message, i) => (
        // TODO: format as cards, add timestamp
        <p key={i} className={message.premium ? "is-premium" : ""}>
          <strong>{message.sender}</strong>:<br />
          <div className="date-container">
            <span>{message.text}</span>
            <span className="date">
              {moment.unix(message.timestamp/1000000000).format("YYYY-MM-DD HH:mm:ss")}
            </span>
          </div>
        </p>
      ))}
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array,
};
