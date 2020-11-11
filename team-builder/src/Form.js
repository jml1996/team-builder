import React from 'react'

export default function Form(props) {
  const { formValues, updateForm, submitForm } = props

  const onChange = evt => {
    const { name, value } = evt.target;
    updateForm(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submitForm();
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
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
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}