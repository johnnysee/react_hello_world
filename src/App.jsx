import React, { Component } from 'react'

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     planet: 'uranus'
  //   }
  // }
  state = {
    planet: "venus",
  };
    render() {
      const { planet } = this.state;
      return (
      <div>
        <h1>Hello {planet} from a class component</h1>
      </div>
    );
  }
}

export default App
