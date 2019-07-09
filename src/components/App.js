import React from 'react';
import PropTypes from 'prop-types';
import Header from "./common/Header";
import Footer from "./common/Footer";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Routes from '../routes';
import {getAllLines} from '../actions/lineActions';
import {getProfileInfo} from '../actions/authActions';
import Loading from './common/Loading';

class App extends React.Component {
  componentDidMount() {
    if (!this.props.isLoggedIn) return;
    this.props.actions.getProfileInfo();
    this.props.actions.getAllLines();
  }

  render() {
    return (
      <div id="app-container" className="container-fluid">
        <Header />
        <main>
          <Routes />
          <Loading loading={this.props.isLoading} />
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

function mapStateToProps(state){
  return {
    isLoggedIn: state.user.isLoggedIn || false,
    isLoading: state.activeAjaxCalls > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({getAllLines, getProfileInfo}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
