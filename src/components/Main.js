import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ListOfAll from './ListOfAll.js'
import New from './New.js'
import Trash from './Trash.js'

class Main extends Component {
    state = {
        listOfToDos: []
    }
    render() {
        return (

            <Switch>
            <Route path="/" exact>
              <section><ListOfAll /></section>
            </Route>
            <Route path="/new">
              <section><New /></section>
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
