import React, { Component } from 'react';

class New extends Component {
    state = {
        text: ""
    }

    onChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }
    append = () => {
        this.props.adder(this.state.text)
        this.setState({
            text: ""
        })
    }

    render() {
        return (
        <>
            <textarea value={this.state.text} onChange={this.onChange} />
            <button onClick={this.append}>Dodaj</button>
        </>
        );
    }
}

export default New;
