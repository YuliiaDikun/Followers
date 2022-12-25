import { Component } from 'react';

import dataUsers from '../services/users';

import { UserList } from './UserList/UserList';

export class App extends Component {
  state = {
    users: dataUsers,
  };

  componentDidMount() {
    const followers = localStorage.getItem('follow');
    const parsedFollowers = JSON.parse(followers);
    if (parsedFollowers) {
      this.setState({ users: parsedFollowers });
    } 
  }
  componentDidUpdate(_, prevState) {
    if (prevState.users !== this.setState.users) {
      localStorage.setItem("follow", JSON.stringify(this.state.users));
    }
  }
  onToggleProp = (id, prop) => {
    this.setState(({ users }) => ({
      users: users.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            [prop]: !user[prop],
          };
        }
        return user;
      }),
    }));
  };
  render() {
    const { users } = this.state;
    return <UserList users={users} onToggleProp={this.onToggleProp} />;
  }
}
