import React, { Component } from 'react';
import DeleteImage from '../images/delete.png'
class NotFinished extends Component {
  render() {
    const { item ,removeItem , onClick } = this.props;
    return (
      <div className="ListnotDone">
        <p onClick={onClick}>{item.title}</p>
        <img src={DeleteImage } onClick={removeItem} />
      </div>
    );
  }
}

export default NotFinished;