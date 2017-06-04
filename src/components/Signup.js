import React from 'react';

const Signup = () => (
    <div>
      <h2>This is signup page! <br/>Please fill in the blank :D </h2>
      <form name='signip' onSubmit ={(e) => this.handleSubmit(e)} >
        <input type ='text' name ='ID' value = 'ID' onChange = {(e) => this.handleChange(e)} />
        <input type ='password' name = 'PW' value = 'Password' onChange = {(e) => this. handleChange(e)} />
        <input type = 'submit' value='Enter'/>
      </form>
    </div>
);

export default Signup;
