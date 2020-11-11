import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Form from "./Form";
import Member from "./Member";

const initialFormValues = {
  name: "",
  email: "",
  role: ""
}

function App() {
  const [team, setTeam] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  // console.log(formValues);
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newMember.name || !newMember.email) return;

    setTeam([newMember, ...team]);
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <Form
        formValues={formValues}
        updateForm={updateForm}
        submitForm={submitForm}
      />
      {
        team.map(member => {
          return (
            <Member key={member.name} member={member} />
          )
        })
      }
    </div>
  );
}

export default App;
