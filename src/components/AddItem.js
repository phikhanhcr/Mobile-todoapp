import React, { Component } from 'react';
import classNames from 'classnames';
class Input extends Component {
  render() {
    const { show, onCancel ,Input , value ,onChangeInput , EnterIcon} = this.props;
    let className = "PhoneInput"
    if (show === true) {
      className = classNames(className, 'display')
    }
    return (
      <div className={className}>
        <a href="#" onClick={onCancel}>X</a>
        <input
          id="input"
          type="text"
          placeholder="What's next ?"
          onKeyUp={Input}
          value={value}
          onChange={onChangeInput}
        />
        <a href="#" onClick={EnterIcon}>Enter</a>
      </div>
    );
  }
}

export default Input;