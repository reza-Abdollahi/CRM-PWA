import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectLine } from '../../actions/lineActions';
import LinesList from './LinesList';

class SelectLinePage extends React.Component {
  constructor(props) {
    super(props);

    this.selectLine = this.selectLine.bind(this);
  }

  componentDidMount() {
    this.autoSelectSingleLine();
  }

  componentDidUpdate() {
    this.autoSelectSingleLine();
  }

  autoSelectSingleLine() {
    const { lines } = this.props;
    if (lines.length === 1) {
      this.selectLine(lines[0].id);
    }
  }

  selectLine(lineId) {
    const { selectLine: selectLineAction, history } = this.props;
    selectLineAction(lineId);
    history.push("/line");
  }

  render() {
    const { lines, loadingCompleted } = this.props;
    switch (lines.length) {
      case 0:
        return loadingCompleted
          ? (
            <div className="alert alert-warning mt-3">
            لطفا جهت ثبت نام از
              {' '}
              <a href="https://internet.sepanta.com/signup" className="alert-link">سایت</a>
              {' '}
            اقدام کنید
            </div>
          )
          : null;
      default:
        return <LinesList lines={lines} onSelectLine={this.selectLine} />;
    }
  }
}

SelectLinePage.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.object),
  loadingCompleted: PropTypes.bool.isRequired,
  selectLine: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

SelectLinePage.defaultProps = {
  lines: [],
};

function mapStateToProps(state) {
  return {
    loadingCompleted: state.activeAjaxCalls === 0,
    lines: state.lines.list,
  };
}

export default connect(mapStateToProps, { selectLine })(SelectLinePage);
