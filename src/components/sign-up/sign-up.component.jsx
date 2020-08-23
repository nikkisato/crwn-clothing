import React, { useState } from 'react';
import { SignUpContainer, SignUpTitle } from './sign-up.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle className='title'>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='displayName'
          type='text'
          value={displayName}
          required
          label='Display Name'
          handleChange={handleChange}
        />
        <FormInput
          name='email'
          type='email'
          value={email}
          required
          label='Email'
          handleChange={handleChange}
        />

        <FormInput
          name='password'
          type='password'
          value={password}
          required
          label='Password'
          handleChange={handleChange}
        />
        <FormInput
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          required
          label='Confirm Password'
          handleChange={handleChange}
        />

        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
