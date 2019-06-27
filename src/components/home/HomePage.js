import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import FieldGroup from '../common/FieldGroup';
import {getAllLines} from '../../actions/lineActions';

class HomePage extends React.Component {
  componentDidMount(){
    this.props.getAllLines();
  }

  render() {
    return (
      <div>
        <FieldGroup title="انتخاب خط">
          <ul className="m-0">
            {this.props.lines.map(l =>
              <li key={l.id}>{l.phoneNumber}</li>
            )}
          </ul>
        </FieldGroup>
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
