import React from 'react';//only want render from the react-dom lib
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  myInput = React.createRef();
  // constructor() {
    // super();
    // this.goToStore = this.goToStore.bind(this);
  // }
  goToStore = (event)  => {
    event.preventDefault();
    const storeName = this.myInput.current.defaultValue;
    this.props.history.push(`/store/${storeName}`) 
  }
  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input ref={this.myInput} type="text" name="" id="" required placeholder="Store name" defaultValue={getFunName()} />
        <button type="submit">Visit store</button>
      </form>
    )
  }
}

export default StorePicker;