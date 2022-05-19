import React from 'react';
class Throttle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
      this.handleClick=this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({      date: new Date()      });
    }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <button onClick={this.handleClick}>
           Click me      </button>
        </div>
      );
    }
  }
  export default Throttle;