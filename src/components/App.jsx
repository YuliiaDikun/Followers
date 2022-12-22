import { Component } from 'react';

import { Card } from './Card/Card';


export class App extends Component {
  state = {
    isBtnClick: false,
    followers: 100500,
  };
  onBtnClick = () => { 
    this.setState(prevState => { 
      return {isBtnClick: !prevState.prevState, followers:100501}
    })
  }
  render() {
    const {followers, isBtnClick} = this.state;
    return (
      <Card onBtnClick={this.onBtnClick} isClicked={isBtnClick } followers={followers}/>     
      
    );
  }
}
