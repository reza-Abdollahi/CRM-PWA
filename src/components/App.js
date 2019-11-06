import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Header from "./common/Header";
import Footer from "./common/Footer";
import Routes from '../routes';
import { getAllLines } from '../actions/lineActions';
import { getProfileInfo } from '../actions/authActions';
import Loading from './common/Loading';

class App extends React.Component {
  componentDidMount() {
    const { isLoggedIn, actions } = this.props;
    if (!isLoggedIn) return;
    actions.getProfileInfo();
    actions.getAllLines();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div id="app-container" className="container-fluid">
        <Header />
        <main>
          <Routes />
          <Loading loading={isLoading} />
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn || false,
    isLoading: state.activeAjaxCalls > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getAllLines, getProfileInfo }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
