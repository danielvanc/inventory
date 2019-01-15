import React from 'react';//only want render from the react-dom lib

class StorePicker extends React.Component {
  render() {
    return (
      <form action="" className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" name="" id="" required placeholder="Store name" />
        <button type="submit">Visit store</button>
      </form>
    )
  }
}

export default StorePicker;