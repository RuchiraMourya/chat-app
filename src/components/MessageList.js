import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'
import {connect} from 'react-redux'

const MessageList = ({messages}) => {
    return(
<section id = "message-list">
<ul>
    {messages.map(message => (
        <Message
        key = "message.id"
        {...message}
        />
    ))}
</ul>
</section>
    )
}

export default connect(state => ({messages: state.messages}), {})(MessageList);