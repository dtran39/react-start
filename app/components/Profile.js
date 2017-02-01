var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos')
var UserProfile = require('./Github/UserProfile')
var Notes = require('./Notes/Notes')
/* Profile component will be managing three different states:
  User profile, user repo, notes
*/


var Profile = React.createClass({
  // Set the initial states of components. Very similar to create constructor in ES 6
  getInitialState: function(){
    return {
      notes: [1,2,3],
      bio: {
        name: 'Duc Tran'
      },
      repos: ['a', 'b', 'c']
    }
  },

  render: function(){
    console.log(this.props)
    return (
      <div className="row">
        <div className="col-md-4">
        {/* this.props is every thing that is passed down to the component (usually from its parents)
         this.props.params.username is passed from Router.route in routes.js (profile/:username)*/}
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
        {/*} Saying: Hey Repos component, you will get this.state.repos as repos
         In order to get that repos, you query this.props.repos*/ }        
          <Repos repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
        {/*} On the other hand: this.state.notes is notes specified in itself, not inherited from other.*/}
          <Notes notes={this.state.notes} />
        </div>
      </div>
    )
  }
})

module.exports = Profile;