import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAllLines} from '../../actions/lineActions';
import SelectLine from '../Line/SelectLine';

class HomePage extends React.Component {
  componentDidMount(){
    this.props.getAllLines();
  }

  render() {
    return (
      <div>
        <SelectLine lines={this.props.lines} />
      </div>
    );
  }
}

HomePage.propTypes = {
  userProfile: PropTypes.object,
  lines: PropTypes.array,
  getAllLines: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    userProfile: state.user.profile,
    lines: state.lines
  };
}

export default connect(mapStateToProps, {getAllLines})(HomePage);
