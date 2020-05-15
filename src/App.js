import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuTop from './components/Menu';
import CompletedItem from './components/Completed'
import NotFinishedItem from './components/NotFinished'
import addImage from './images/add.png';
import InputBox from './components/AddItem';
import SadMood from './images/sad.png'
import Cloud from './images/cloud.png'
class App extends Component {
  constructor() {
    super();
    this.state = {
      showBoxInput: false,
      completed: [
      ],
      notDone: [
        
      ],
      newItem: ''
    }
  }
  showBoxInput = () => {
    this.setState({ showBoxInput: true })
  }
  hiddenBoxInput = () => {
    this.setState({ showBoxInput: false })
  }

  // Enter on keyboard
  EnterKey = (event) => {
    const completed = this.state.completed;
    let text = event.target.value;
    if (event.keyCode === 13) {
      if (!text) {
        return;
      }
      let check = text.trim(); // remove all space on either side of string
      if (!check) {
        return;
      }
      this.setState({
        completed: [
          { title: text, isCompleted: false },
          ...completed
        ]
      })
      this.setState({
        newItem: ""
      })
      this.setState({
        showBoxInput: false
      })
    }
  }
  // Click vao enter
  EnterIcon = (event) => {
    const completed = this.state.completed;
    let text = document.getElementById('input').value
    if (!text) {
      return;
    }
    let check = text.trim(); // remove all space on either side of string
    if (!check) {
      return;
    }
    this.setState({
      completed: [
        { title: text, isCompleted: false },
        ...completed
      ]
    })
    this.setState({
      newItem: ""
    })
    this.setState({
      showBoxInput: false
    })

  }
  onChangeInput = (event) => {
    let text = event.target.value;
    this.setState({
      newItem: text,
    })
  }

  // remove Item 
  removeItem(item) {
    return () => {
      let index;
      const completedList = this.state.completed;
      const notDoneList = this.state.notDone;
      if (completedList.indexOf(item) !== -1) {
        index = completedList.indexOf(item);
        this.setState({
          completed: [
            ...completedList.slice(0, index),
            ...completedList.slice(index + 1)
          ]
        })
      } else {
        index = notDoneList.indexOf(item)
        this.setState({
          notDone: [
            ...notDoneList.slice(0, index),
            ...notDoneList.slice(index + 1)
          ]
        })
      }
    }
  }

  onClickItem(item){ // use to finish anything
    return () => {
      const completed = this.state.completed;
      const notDone = this.state.notDone;
      const index = completed.indexOf(item);
      this.setState({
        completed : [
          ...completed.slice( 0 , index ),
          ...completed.slice(index + 1)
        ]
      })
      this.setState({
        notDone : [
          item , 
          ...notDone
        ]
      })
    }
  }
  render() {
    const { showBoxInput, completed, notDone, newItem } = this.state;
    return (
      <div className="App">
        <div className="Phone">
          <InputBox
            show={showBoxInput}
            onCancel={this.hiddenBoxInput}
            Input={this.EnterKey}
            value={newItem}
            onChangeInput={this.onChangeInput}
            EnterIcon={this.EnterIcon}
          />

          <MenuTop />
          <p className="Title">UpComing</p>
          <div className="List First">
            {
              completed.length > 0 && completed.map((ele, index) => (
                <CompletedItem
                  key={index}
                  item={ele}
                  removeItem={this.removeItem(ele)}
                  onClick={this.onClickItem(ele)}
                />
              ))
            }
            {
              completed.length === 0 && 
              <div className="NothingHere">
                <p className="remember">Remember you have 24 hours a day, use it effectively. </p>
                <p>No Pain , No Gain</p>
                <img className="Cloud" src={Cloud}/>
              </div>
            }
          </div>

          <p className="Title Complete">Finished</p>
          <div className="List Last">
            {
              notDone.length > 0 && notDone.map((ele, index) => (
                <NotFinishedItem
                  key={index}
                  item={ele}
                  removeItem={this.removeItem(ele)}
                />
              ))
            }
            {
              notDone.length === 0 &&
              <div class="NothingHere">
                <img className="SadMood" src={SadMood} />
                <p>Nothing Here</p>
              </div>
            }
          </div>
          <div className="AddNew">
            <a href="#" onClick={this.showBoxInput}>
              <img src={addImage} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
