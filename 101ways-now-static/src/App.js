import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import Links from './views/Links';
import About from './views/About';
import RandomGif from './views/RandomGif';
import NotFound from './views/NotFound';
import './App.css';

class App extends Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <div className="App">
        <h1>Welcome to <span role="img" aria-label="101">💯 + 1⃣</span> ways!</h1>
        {
          pathname !== '/' ? (
            <h3><Link to="/">Go Home</Link></h3>
          ) : null
        }
        <Switch>
          <Route exact path="/" component={Links} />
          <Route exact path="/about" component={About} />
          <Route exact path="/random-gif" component={RandomGif} />
          <Route path="*" component={NotFound} />
        </Switch>
        <section>
          <img className="counter" src="https://ht-ct.now.sh/counters/now" alt="views" />
        </section>
      </div>
    );
  }
}

export default withRouter(App);
