import React, { useState } from 'react'
import GreetingInput from './GreetingInput'
import GreetingOutput from './GreetingOutput'

const App = () => {
  const [planet, setPlanet] = useState('venus')
  return (
    <React.Fragment>
      <GreetingOutput planet={planet} />
      <GreetingInput renderGreeting={ setPlanet }/>
    </React.Fragment>
  )
}

export default App


// import React, { Component } from 'react'
// import GreetingInput from './GreetingInput'
// import GreetingOutput from './GreetingOutput'

// class App extends Component {

//   state = {
//     planet: "venus",
//   };

//   renderGreeting(event) {
//     this.setState({planet: event.target.value});
//   }
//     render() {
//       // const { planet } = this.state;
//       return (
//       <div>
//       <GreetingOutput planet={this.state.planet} />
//       <GreetingInput renderGreeting={this.renderGreeting.bind(this)}/>
//       </div>
//     );
//   }
// }

// export default App
