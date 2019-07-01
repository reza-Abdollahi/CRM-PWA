import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class LineDashboardPage extends React.Component {
  render() {
    const {line, match} = this.props;
    if (!match.params.id) {
      return <Redirect to={`${match.url}/select`} />;
    }
    else if (!line) {
      return null;
    }
    return (
      <div>
        phoneNumber: {line.phoneNumber}
        <br/>
        status: {line.statusText}
      </div>
    );
  }
}

LineDashboardPage.propTypes = {
  line: PropTypes.object,
  match: PropTypes.object.isRequired,
};

function getLineById(lines, lineId) {
  const line = lines && lines.filter(l => l.id == lineId);
  if (line.length > 0) return line[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const lineId = ownProps.match.params.id;
  return {
    line: getLineById(state.lines, lineId),
  };
}

export default connect(mapStateToProps)(LineDashboardPage);
