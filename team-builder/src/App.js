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

  const [editSelection, setEditSelection] = useState(null);
  const [memberIndexState, setMemberIndexState] = useState(null);
  
  const updateEditSelection = (bool, id) => {
    if (bool) {
      setEditSelection(true);
      setMemberIndexState(id);
      setFormValues(initialFormValues);
    }else{
      setEditSelection(null);
      setMemberIndexState(null);
      setFormValues(initialFormValues);
    }
  }

  // console.log(formValues);
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = (index) => {
    console.log(index);
    if (index === undefined){
      const newMember = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        role: formValues.role
      }
  
      if (!newMember.name || !newMember.email) return;
  
      setTeam([newMember, ...team]);
      setFormValues(initialFormValues);
    }else{
      const editedMember = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        role: formValues.role
      }
      if (!editedMember.name || !editedMember.email) return;

      setTeam([
        ...team.slice(0, index),
        editedMember,
        ...team.slice(index+1),
      ])
      console.log(team);
    }
  }

  return (
    <div className="App">
      <Form
        formValues={formValues}
        updateForm={updateForm}
        submitForm={submitForm}
      />
      {
        team.map((member, index) => {
          return (
            <>
              <Member
                key={index}
                id={index}
                member={member}
                formValues={formValues}
                updateForm={updateForm}
                submitForm={submitForm}
                editSelection={editSelection}
                updateEditSelection={updateEditSelection}
                memberIndexState={memberIndexState}
              />
            </>
          )
        })
      }
    </div>
  );
}

export default App;
