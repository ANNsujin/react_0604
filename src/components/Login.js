import React from 'react';

const Login =() => (
    <div>
      <h2>This is Login part! <br/>Please fill in the blank correctly!</h2>
      <form name='login' onSubmit ={(e) => this.handleSubmit(e)} >
        <input type = 'text' name= 'ID' value ='ID' onChange = {(e) => this.handleChange(e)} />
        <input type = 'password' name = 'PW' value='Password' onChange = {(e) => this.handleChange(e)} />
        <input type = 'submit' value='Enter' />
      </form>
    </div>
);

export default Login;
