import React from "react"
import '../components/form.css'

const User = (props) => {
	return (
		<div className="user-container">
			<h3>{props.userObject.name}</h3>
			<p>{props.userObject.email}</p>
			<p>{props.userObject.password}</p>
		</div>
	)
}

export default User;