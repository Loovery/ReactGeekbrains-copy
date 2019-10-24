import React from "react";
import Message from "./Message"

export default class MessageField extends React.Component {
    state = {
        messages: ["Привет!", "Как дела?"]
    }
    handleClick =() => {
        this.setState({messages: [...this.state.messages, "Нормально"]})
    }
    render() {
        const {messages} = this.state
        const messageElements = messages.map(message => <Message key={message} text={message}/> )
        return
        (
            <div>
                {messageElements}
                <button onClick={this.handleClick}>Send Message</button>
            </div>
        )//hfhgf
    }
}