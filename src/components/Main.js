import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ToDoList from './ToDoList';

class Main extends Component {
    state = {
        toDoList: []
    }



    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    toDoList: json.map(it => {
                        return {
                            id: it.id,
                            text: it.title,
                            done: it.completed
                        }
                    })
                })
            })
    }

    changeStatus = (id) => {
        const newMap = this.state.toDoList.map(it => {
            if(it.id === id)
                it.done = !it.done
            return it
        })

        this.setState({
            toDoList: newMap
        })
    }

    render() {
        return (

            <Switch>
                <Route path="/" exact>
                    <section>
                        <ToDoList
                        toDoList={this.state.toDoList}
                        changeStatus={this.changeStatus}
                        />
                    </section>
                </Route>
                <Route path="/new">
                    <section>Nowe todo</section>
                </Route>
                <Route path="/trash">
                    <section>Śmietnik</section>
                </Route>
                <Route>
                    <section><h1>404 page not found</h1></section>
                </Route>
            </Switch>
        );
    }
}

export default Main;
