import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'

class App extends React.Component {
  // constructor() {
    // super();
    state = {
      fishes: {},
      order: {}
    }
    addFish = fish => {
      // take a copy of the existing state
      const fishes = {...this.state.fishes}
      fishes[`fish${Date.now()}`] = fish;
      // state: ...
      this.setState({
        fishes
      })
    }
  // }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh seafood market" /> 
        </div>
        <Order /> 
        <Inventory addFish={this.addFish}/> 
      </div>
    )
  }
}

export default App;