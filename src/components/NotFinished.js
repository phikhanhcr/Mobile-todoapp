import React, { Component } from 'react';
import DeleteImage from '../images/delete.png'
class NotFinished extends Component {
  render() {
    const { key , item ,removeItem } = this.props;
    
    return (
      <div className="Finished">
        <p>{key}</p>
        <p>{item.title}</p>
        <img src={DeleteImage} onClick={removeItem}/>
      </div>
    );
  }
}

export default NotFinished;