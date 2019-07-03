import React from 'react';
import PropTypes from 'prop-types';
import Header from "./common/Header";
import Footer from "./common/Footer";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Routes from '../routes';
import {getAllLines} from '../actions/lineActions';
import {getProfileInfo} from '../actions/authActions';

class App extends React.Component {
  componentDidMount() {
    this.props.actions.getProfileInfo();
    this.props.actions.getAllLines();
  }

  render() {
    return (
      <div id="app-container" className="container-fluid">
        <Header />
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({getAllLines, getProfileInfo}, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(App);
