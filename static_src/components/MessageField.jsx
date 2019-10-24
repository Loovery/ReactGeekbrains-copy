import React from "react";

export default class MessageField extends React.Component {
    state = {
        messages: ["Привет!", "Как дела?"]
    }
    handleClick =() => {
        this.setState({messages: [...this.state.messages, "Нормально"]})
    }
    render() {
        const messageElements = this.state.messages.map((index, text) => {
            this.setState({messages: [...this.state.messages, "Нормально"]})
        })
        return
        (
            <div>
                {messageElements}
                <button onClick={this.handleClick}>Send Message</button>
            </div>
        )
    }
}