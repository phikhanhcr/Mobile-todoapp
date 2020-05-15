import React, { Component } from 'react';
import Menu from '../images/menu.png'
class Title extends Component {
  render() {
    return (
      <div className="Dailist">
        <img src={Menu} alt="" />
        <h3>Todo List</h3>
      </div>
    );
  }
}

export default Title;