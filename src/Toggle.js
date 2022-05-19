import React from 'react';
class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    handleClick() {
      this.setState({      date: new Date()      });
    }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <button onClick={() => this.handleClick()}>
           Click me      </button>
        </div>
      );
    }
  }
  export default Toggle;
