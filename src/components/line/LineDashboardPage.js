import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getSelectedLine} from '../../selectors';
import {getLineDetails} from '../../actions/lineActions';
import LineDetails from './LineDetails';

class LineDashboardPage extends React.Component {

  componentDidMount() {
    const selectedLineId = this.props.selectedLineId;
    if (!selectedLineId) return;
    this.props.getLineDetails(selectedLineId);
  }

  render() {
    const {line, selectedLineId, match} = this.props;

    if (!selectedLineId)
      return <Redirect to={`${match.url}/select`} />;
    else if (!line)
      return null;

    return (
      <LineDetails line={line} />
    );
  }

}

LineDashboardPage.propTypes = {
  line: PropTypes.object,
  match: PropTypes.object.isRequired,
  selectedLineId: PropTypes.number,
  getLineDetails: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    line: getSelectedLine(state),
    selectedLineId : state.lines.selectedId,
  };
}

export default connect(mapStateToProps, {getLineDetails})(LineDashboardPage);
