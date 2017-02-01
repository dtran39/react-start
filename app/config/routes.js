var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile'); // New
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute; // A default path

module.exports = (
  <Route path="/" component={Main}>
    <Route path="profile/:username" component={Profile} />
    // Index route says activate this component if none of the other route that we have earlier matches
    <IndexRoute component={Home} />
  </Route>
);