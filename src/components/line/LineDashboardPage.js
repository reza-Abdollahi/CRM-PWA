import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getSelectedLine } from '../../selectors';
import { getLineDetails } from '../../actions/lineActions';
import LineDetails from './LineDetails';
import LineDetailsHeader from './LineDetailsHeader';

class LineDashboardPage extends React.Component {
  componentDidMount() {
    const { selectedLineId, getLineDetails: getLineDetailsAction } = this.props;
    if (!selectedLineId) return;
    getLineDetailsAction(selectedLineId);
  }

  render() {
    const {
      line, selectedLineId, hasMoreLines, match,
    } = this.props;
    const selectLineUrl = `${match.url}/select`;

    if (!selectedLineId) { return <Redirect to={selectLineUrl} />; }
    if (!line) { return null; }

    return (
      <div>
        <LineDetailsHeader line={line} selectLineUrl={selectLineUrl} hasMoreLines={hasMoreLines} />
        <LineDetails line={line} />
      </div>
    );
  }
}

LineDashboardPage.propTypes = {
  line: PropTypes.object,
  match: PropTypes.object.isRequired,
  selectedLineId: PropTypes.number,
  hasMoreLines: PropTypes.bool.isRequired,
  getLineDetails: PropTypes.func.isRequired,
};

LineDashboardPage.defaultProps = {
  line: undefined,
  selectedLineId: undefined,
};

function mapStateToProps(state, ownProps) {
  const { selectedId, list } = state.lines;
  return {
    line: getSelectedLine(state),
    selectedLineId: selectedId,
    hasMoreLines: list.length > 1,
  };
}

export default connect(mapStateToProps, { getLineDetails })(LineDashboardPage);
