import React, { Component } from 'react'
import PropTypes from "prop-types";


export default class User extends Component {
    render() {

        //Destructing
        const {name, department, salary} = this.props;
        return (
            <div>
                <ul>
                    <li>İsim : {name}</li>
                    <li>Departman : {department}</li>
                    <li>Maaş : {salary} </li>
                </ul>
            </div>
        )
    }
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired
}

User.defaultProps = {
    name : "bilgi yok",
    department : "bilgi yok",
    salary : "bilgi yok"
}