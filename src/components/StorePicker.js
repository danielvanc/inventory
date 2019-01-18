import React from 'react';//only want render from the react-dom lib
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  render() {
    return (
      <form action="" className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" name="" id="" required placeholder="Store name" defaultValue={getFunName()} />
        <button type="submit">Visit store</button>
      </form>
    )
  }
}

export default StorePicker;