import { Component } from 'react';

import { Card } from './Card/Card';

export class App extends Component {
  state = {
    isBtnClick: false,
  };

  componentDidMount() {
    const followers = localStorage.getItem('follow');
    const parsedFollowers = JSON.parse(followers);
    if (parsedFollowers) {
      this.setState({ isBtnClick: parsedFollowers });
    }
  }
  componentDidUpdate(_, prevState) {    
    if (prevState.isBtnClick !== this.setState.isBtnClick) {      
      localStorage.setItem('follow', JSON.stringify(this.state.isBtnClick));
    }
  }

  onBtnClick = () => {
    this.setState(prevState => {
      return { isBtnClick: !prevState.isBtnClick};
    });
  };
  render() {
    const { isBtnClick } = this.state;
    return <Card onBtnClick={this.onBtnClick} isClicked={isBtnClick} />;
  }
}
