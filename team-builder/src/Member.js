import React, { useEffect, useState } from 'react'


export default function Friend(props) {
  const { id, member, formValues, updateForm, submitForm, editSelection, updateEditSelection, memberIndexState } = props;

  const onChange = evt => {
    const { name, value } = evt.target;
    updateForm(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    console.log(id);
    submitForm(id);
  }

//   console.log(editSelection);
  if (editSelection != null && id === memberIndexState){
        return (
            <form key="editor" className='form container' onSubmit={onSubmit}>
              <div className='form-group inputs'>
                <label>Name
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={onChange}
                    placeholder="Name"
                    maxLength="30"
                  ></input>
                </label>
                <label>Email
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={onChange}
                    placeholder="email address"
                    maxLength="40"
                  ></input>
                </label>
                <label>Role
                  <select name="role" value={formValues.role} onChange={onChange}>
                    <option value="">------</option>
                    <option value="instructor">Backend Engineer</option>
                    <option value="student">Frontend Engineer</option>
                    <option value="hack">Hack</option>
                    <option value="startist">Starving Artist</option>
                    <option value="prince">Prince</option>
                    <option value="king">King</option>
                    <option value="queen">Queen</option>
                    <option value="knave">Knave</option>
                  </select>
                </label>
                <div className='submit'>
                  <button onClick={() => updateEditSelection(false, id)}>save</button>
                </div>
              </div>
            </form>
        )
  }else{
 

    return (
        <div className='friend container'>
        <h2>{member.name}</h2>
        <p>Email: {member.email}</p>
        <p>Role: {member.role}</p>
        <button onClick={() => updateEditSelection(true, id)}>Edit</button>
        </div>
    )
  }
}