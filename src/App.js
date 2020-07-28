import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      errorMessage: ''
    };
  }

  onChangeHandler_incr = () => {
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1,
        errorMessage: ''
      };
    })
  }


  onChangeHandler_decr = () => {
    if (this.state.counter !== 0) {
      this.setState((prevState, props) => {
        return {
          counter: prevState.counter - 1
        };
      })
    } else {
      this.setState({
        errorMessage: 'The counter cannot go below 0'
      })
    }
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
        <br />
        <h1 data-test="warning-text" style={{ textAlign: "center", color: 'red' }}>{this.state.errorMessage}</h1>

        <button
          data-test="increment-button"
          onClick={this.onChangeHandler_incr}
          style={{
            display: 'block',
            margin: '0 auto',
            fontSize: '25px'
          }} >Increment Counter</button>
        <br />

        <button
          data-test="decrement-button"
          onClick={this.onChangeHandler_decr}
          style={{
            display: 'block',
            margin: '0 auto',
            fontSize: '25px'
          }} >Decrement Counter</button>


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
