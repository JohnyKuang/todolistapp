import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      newItem:"",
      list:[]
    }
  }

  updateInput(key, value){ //good for apps using local storage
    //update react state
    this.setState({
      [key]: value //"key" is "newItem" 
    });
  }

  addItem(){
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice() //slice takes everything in newItem object (the value)
    };

    //copy of current list items
    const list = [...this.state.list]
    //push item to list
    list.push(newItem)

    //update state with new list and reset newItem input
    this.setState({
      newItem: "",
      list
    });
  }

  deleteItem(id){
    //copy of current list items
    const list = [...this.state.list]
    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id)
    //update state
    this.setState({
      list: updatedList 
    });
  }

  render() {
    return (
      <div className = "App">
        <div>
          Add an item...
          <br/>
          <input 
            type = "text"
            placeholder = "Type item here..."
            value = {this.state.newItem}
            onChange = {e => this.updateInput("newItem", e.target.value)} //event that updates new item //using arrows instead of binding
          />
          <button onClick = {() => this.addItem()}> 
            Add
          </button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                    {item.value}
                    <button onClick = {() => this.deleteItem(item.id)}>
                      X
                    </button>
                </li>
              )
            }
              )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
