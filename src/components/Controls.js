import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as nakamajs from "@heroiclabs/nakama-js/dist/nakama-js.umd";

 class Controls extends Component {

  render() {
    var client = new nakamajs.Client("defaultkey", "127.0.0.1", 7350);
    console.log(client);
    client.ssl = false;
    const email = "hello@example.com";
    const password = "somesupersecretpassword";
    const session = "null";
    client.authenticateEmail({
      email: email,
      password: password
    }).then((response) => {
      console.log(response);
    });
    // Store session for quick reconnects.
    localStorage.nakamaAuthToken = session.token;
    console.info("Authenticated successfully. User id:", session.user_id);
    const { resetLabel, incrementLabel, decrementLabel, increment, decrement, resetCount } = this.props;

    return (
      <div className="controls">
        <div onClick={() => {increment();}}>
          <span>{incrementLabel}</span>
        </div>
        <div onClick={() => {resetCount(0);}}>
          <span>{resetLabel}</span>
        </div>
        <div onClick={() => {decrement();}}>
          <span>{decrementLabel}</span>
        </div>
      </div>
    );
  }
}

Controls.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  resetCount: PropTypes.func,
  resetLabel: PropTypes.string,
  incrementLabel: PropTypes.string,
  decrementLabel: PropTypes.string,
};

Controls.defaultProps = {
  resetLabel: "RESET",
  incrementLabel: "+",
  decrementLabel: "-"
};

export default Controls;
