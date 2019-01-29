import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Links extends Component {
  render() {
    return (
      <section>
        <small>Click the links below.</small>
        <h3><Link to="/about">About Page</Link></h3>
        <h3><Link to="/random-gif">Random GIF</Link></h3>
      </section>
    )
  }
}
