import React from 'react';
import Header from '../../organisms/Header/Header';
import Button from '../../atoms/Button/Button';
import './SignUp.css';

function SignUp() {
  //   <form
  //   onSubmit={(e: React.SyntheticEvent) => {
  //     e.preventDefault();
  //     const target = e.target as typeof e.target & {
  //       name: { value: string };
  //       surname: { value: string };
  //       email: { value: string };
  //       password: { value: string };
  //       repeatPassword: { value: string };
  //       phoneNumber: { value: number };
  //     };
  //     const email = target.email.value;
  //     const password = target.password.value;
  //   }}
  // >

  return (
    <div id="sign-up">
      <Header />
      <div>
        <h1 className="new-contact">CREATE NEW ACCOUNT</h1>
        <img className="img" src="" alt="" />
        <Button background="blue" text="Upload Photo" />
      </div>
      <div className="contact">
        <h2 className="contact-info">Contact information</h2>
        <div>
          <label htmlFor="name">
            Name:
            <input type="name" name="name" />
          </label>
        </div>
        <div>
          <label htmlFor="surname">
            Surname:
            <input type="surname" name="surname" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <div>
          <input type="submit" value="Log in" />
        </div>
      </div>
      <div>
        <h2 className="billing">Billing Information</h2>
        <div>
          <label htmlFor="id">
            Id:
            <input type="id" name="id" />
          </label>
        </div>
        <div>
          <label htmlFor="taxnumber">
            Tax Number:
            <input type="taxnumber" name="taxnumber" />
          </label>
        </div>
        <Button background=" #2A9D8F" text="Create Account" />
      </div>
    </div>
  );
}

export default SignUp;
