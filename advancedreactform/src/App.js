import './App.css';
import axios from "axios"
import React, { useState } from "react"
import * as yup from "yup"
import Form from "./components/form"
import formSchema from "./validation/formSchema"
import User from "./components/User"

const initialUsers = [];
const initialValue = {
  name: "",
  email: "",
  password: "",
  terms: true

};
const initialFormErrors = {
  name: "",
  email: "",
  password: ""
};


function App() {

  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const inputChange = (name, value) => {
    yup
    .reach(formSchema, name) // checking if name is same as in formSchema
    .validate(value)  // compairing with value of formSchema
    .then(()=> {  
      setFormErrors({...formErrors, [name]: ""});
    })
    .catch((err)=>{
      setFormErrors({...formErrors, [name]: err.errors[0]}); // shows state errors
    })
    setFormValues({...formValues, [name] : value});           // event change handler
  };

  const postUser = (user) => {
    axios.post('https://reqres.in/api/users', user)
    .then((res) => {
      setUsers([res.data, ...users]);     // post new user
      setFormValues(initialValue);        //reseting to blank
    })
    .catch((err) => {
      console.log('something went wrong', err)
    })
  };

  const submitForm = () => {
    const user = {
      name: formValues.name.trim(),     //trim method deletes all whitespaces from beginning/end of this string
      email: formValues.email.trim(),         //on submit we changing theese variables to user's input
      password: formValues.password.trim(),
      terms: formValues.terms
    };
    postUser(user);  // posting created user by our function
     }   


  return (
    <div className="App">
      <h1>App for user form test</h1>
      <Form  submitForm={submitForm} inputChange={inputChange} errors={formErrors} formValues={formValues}/>
      <div className="user-container">
        {
          users.map((singleUser) =>{
            return <User key={singleUser.id} userObject={singleUser} />
          })
        }
      </div>
    </div>
  );
}

export default App;
