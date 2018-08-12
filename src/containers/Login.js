import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { login } from "../actions/rethinkActions";

export class Login extends Component {
  static get propTypes() {
    return {
      login: PropTypes.any
    };
  }

  render() {
    const { login } = this.props;
    return (
      <div>
        <button onClick={login}> hello</button>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    login: () => {
      dispatch(login());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
