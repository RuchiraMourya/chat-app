import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Sidebar = ({ users }) => (

<aside id="sidebar" className="sideBar">
<h5>ONLINE</h5>
<hr/>
<ul>
    {users.map(user => (
            <li key = {user.id}>{user.name}</li>
        ))}
</ul>
</aside>
)

export default connect(state => ({users: state.users}), {})(Sidebar);