import React, { Component } from 'react';
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Joshua Abel Portfolio</h1>
      <div>{moment().subtract(10, 'days').calendar()}</div>
     </div>
    );
  }
}
