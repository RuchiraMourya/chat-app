import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addMessage} from '../actions/index'

const AddMessage = (props) => {
    console.log(props);
    let input;

    return(
        <section id = "new-message">
        <input onKeyPress = {(e) => { 
            if(e.key === 'Enter'){
                props.addMessage(input.value, 'Me')
                input.value = ''
        }
        }}
        type = "text"
        placeholder = "Type message here :-)"
        ref = {(node) => {
            input = node
        }}/>
        </section>
    )
}

AddMessage.propTypes = {
    addMessage: PropTypes.func.isRequired
}

const mapDispatchToProps  = dispatch => ({
    addMessage : (message, author) => {
        dispatch(addMessage(message, author))
    }}
)

export default connect(() => ({}),mapDispatchToProps)(AddMessage);

// export default AddMessage