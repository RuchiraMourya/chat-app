import React from 'react'
import PropTypes from 'prop-types'

const Message = ({message, author}) => {
    let msgClass = author=== 'Me'  ? 'sentMsg' : 'receiveMsg';
    return(
<p className = {msgClass}> 
    <b>{author}: </b> <i>{message}</i>
</p>
    )
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default Message