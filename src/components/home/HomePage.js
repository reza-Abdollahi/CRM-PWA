import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Sepanta</h1>
        <p>welcome to Sepanta</p>
        <Link to="about" className="btn btn-primary btn-lg">about</Link>
      </div>
    );
  }
}

export default HomePage;
