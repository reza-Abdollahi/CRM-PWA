import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAllLines} from '../../actions/lineActions';
import SelectLine from '../line/SelectLine';

class HomePage extends React.Component {
  componentDidMount(){
    this.props.getAllLines();
  }

  render() {
    const {lines, activeAjaxCalls} = this.props;
    return (
      <div>
        <SelectLine lines={this.props.lines} loadingCompleted={activeAjaxCalls == 0} />
      </div>
    );
  }
}

HomePage.propTypes = {
  userProfile: PropTypes.object,
  lines: PropTypes.array,
  activeAjaxCalls: PropTypes.number.isRequired,
  getAllLines: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    userProfile: state.user.profile,
    activeAjaxCalls: state.activeAjaxCalls,
    lines: state.lines
  };
}

export default connect(mapStateToProps, {getAllLines})(HomePage);
