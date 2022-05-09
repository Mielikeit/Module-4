import React, { useState } from 'react'

function Form() {
  const [values, setValues] = useState({
    userName: "",
    passName: "",
  });

  const handleInputChange = (event) => {
    setValues({...values, firstname: event.target.value})
  }

  return (
    <div>
      <form>
        <input 
          value={values.userName}
          onChange={handleInputChange}
          className='form-field'
          placeholder='Username'
          name='userName'
        />
        <input 
          value = {values.passName}
          className='form-field'
          placeholder='Password'
          name='passName'
        />
      </form>


    </div>
  )
}

export default Form