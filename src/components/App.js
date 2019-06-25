import React from 'react';
import PropTypes from 'prop-types';
import Header from "./common/Header";
import Footer from "./common/Footer";
import {connect} from "react-redux";
import routes from '../routes';

class App extends React.Component {
  render() {
    return (
      <div id="app-container" className="container-fluid">
        <Header loading={this.props.loading} />
        <main>
          {routes}
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.activeAjaxCalls > 0
  };
}

export default connect(mapStateToProps)(App);
