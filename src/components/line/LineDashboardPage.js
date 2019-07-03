import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getSelectedLine} from '../../selectors';

class LineDashboardPage extends React.Component {
  render() {
    const {line, selectedLineId, match} = this.props;

    if (!selectedLineId)
      return <Redirect to={`${match.url}/select`} />;
    else if (!line)
      return null;

    return (
      <div>
        phoneNumber: {line.number}
      </div>
    );
  }
}

LineDashboardPage.propTypes = {
  line: PropTypes.object,
  match: PropTypes.object.isRequired,
  selectedLineId: PropTypes.number,
};

function mapStateToProps(state, ownProps) {
  return {
    line: getSelectedLine(state),
    selectedLineId : state.lines.selectedId,
  };
}

export default connect(mapStateToProps)(LineDashboardPage);
