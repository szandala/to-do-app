import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ListOfAll from './ListOfAll.js'
import New from './New.js'
import Trash from './Trash.js'

class Main extends Component {
  state = {
    listOfToDos: []
  }

  toggleItem = (toDoId) => {
    console.log(`Toggling ${toDoId}`)
    const newList = this.state.listOfToDos.map(it =>{
      if(it.id === toDoId)
        it.done = !it.done;
      return it;
    })
    this.setState({
      listOfToDos: newList
    })
  }

  addNew = (text) => {
    const newId = this.state.listOfToDos.length;
    this.setState({
      listOfToDos: this.state.listOfToDos.concat({id: newId, text: text, done: false})
    })
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json =>{
        this.setState({
          listOfToDos: json.map(it => {
            return { id: it.id, text: it.title, done: it.completed}
          })
        })
      })
  }

  render() {
    // console.log(this.state.listOfToDos);
    return (

      <Switch>
        <Route path="/" exact>
          <section><ListOfAll todos={this.state.listOfToDos} toggler={this.toggleItem}/></section>
        </Route>
        <Route path="/new">
          <section><New adder={this.addNew}/></section>
        </Route>
        <Route path="/trash">
          <section><Trash /></section>
        </Route>
        <Route>
          <section><h1>Error 404 - not found</h1></section>
        </Route>
      </Switch>
    );
  }
}

export default Main;
