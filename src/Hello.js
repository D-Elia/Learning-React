import React from 'react';
class Hello extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: "Elia", date: new Date()};
        console.log('I am inside constructor')
    }
    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps')
        return {};
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    render() {
      console.log("Render")
      return (
        <div>
             <h2>My Name  is {this.state.name}.</h2>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
export default Hello;









