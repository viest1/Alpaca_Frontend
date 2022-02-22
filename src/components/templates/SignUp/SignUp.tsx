import React from 'react';
import Header from '../../organisms/Header/Header';
import './SignUp.css';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';

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
        <h1>CREATE NEW ACCOUNT</h1>
        <img src="" alt="" />
      </div>
      <h2>Contact information</h2>
      <InputWithLabel label="name" name="name" placeholder="Give your Name" />
      {/* <div> */}
      {/*   <label htmlFor="name"> */}
      {/*     Name: */}
      {/*     <input type="name" name="name" /> */}
      {/*   </label> */}
      {/* </div> */}
      <div>
        <label htmlFor="surname">
          Surname:
          <input type="text" name="surname" />
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
  );
}

export default SignUp;
