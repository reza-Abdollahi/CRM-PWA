import React from 'react';
import PropTypes from 'prop-types';
import Header from "./common/Header";
import Footer from "./common/Footer";
import {connect} from "react-redux";
import Routes from '../routes';
import {getAllLines} from '../actions/lineActions';

class App extends React.Component {
  componentDidMount(){
    this.props.getAllLines();
  }

  render() {
    return (
      <div id="app-container" className="container-fluid">
        <Header loading={this.props.loading} />
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  getAllLines: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.activeAjaxCalls > 0
  };
}

export default connect(mapStateToProps, {getAllLines})(App);
