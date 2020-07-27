import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  onChangeHandler = () => {
    this.setState({ counter: this.state.counter + 1 })
  }


  render() {
    return (
      <div
        data-test="component-app">
        <h1
          data-test="counter-display"
          style={{
            textAlign: "center",
            fontSize: '43px'
          }}>The count is {this.state.counter}</h1>

        <button
          data-test="increment-button"
          onClick={this.onChangeHandler}
          style={{
            display: 'block',
            margin: '0 auto',
            fontSize: '25px'
          }} >Increment Counter</button>
      </div>
    )
  }
}




// import React, { useState } from 'react'

// const App = () => {

//   const initialState = 0;
//   const [state, setstate] = useState(initialState)


//   return (
//     <div>

//       <h1 style={{ textAlign: "center", fontSize: '43px' }}>The count is {state}</h1>
//       <button onClick={() => setstate(state + 1)} style={{ display: 'block', margin: '0 auto', fontSize: '25px' }} >Increment Counter</button>
//     </div>
//   )
// }

// export default App
