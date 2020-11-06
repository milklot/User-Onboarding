import React from "react"
import "./form.css"

const Form = (props) => {

	const { submitForm, inputChange, errors, formValues } = props;

	const submit = (event) => {
		event.preventDefault();
		console.log("form submitted!");
		submitForm();
	};

	const onChange = (event) => {
		const {name, value, type, checked} = event.target;
		const valueChecker = (type === "checkbox" ? checked : value); // this variable checking if input is checkbox or not
		inputChange(name, valueChecker);
		console.log("input changed!", event.target.value);
	};

	const isDisabled = () => {
        return (!formValues.name.trim() || !formValues.email.trim() || !formValues.password.trim() || !formValues.terms) 
    }
	
	return (
		<form onSubmit={submit} className="form-container">
			<div className="errors-container">
				<p>{errors.name}</p>
				<div>{errors.email}</div>
				<div>{errors.password}</div>
				<div>{errors.terms}</div>
			</div>
			<div className="form-imput-container">
			<label htmlFor='name'>
				Name
				<input type="text" name="name" id="name" placeholder="Enter your name" value={formValues.name} onChange={onChange}/>
			</label>
			<label htmlFor="email">
				Email
				<input type="email" name="email" id="email" placeholder="enter your email" value={formValues.email} onChange={onChange}/>
			</label>
			<label htmlFor="password">
				Password
				<input type="password" name="password" id="password" placeholder="enter your password" value={formValues.password} onChange={onChange}/>
			</label>
			<label htmlFor="terms">
				Please check it if you agree with terms of service
				<input type="checkbox" name="terms" id="terms" value={formValues.terms} onChange={onChange}/>
			</label>
			</div>
			<div className="form-submit">
				<button id="submitBTN" isDisabled={isDisabled}>Submit</button>
			</div>
		</form>
	)
}


export default Form;