import React, { SyntheticEvent, useContext } from 'react';
import { Context } from '../../../providers/GeneralProvider';
import useForm from '../../../hooks/useForm';
import InputWithLabel from '../../atoms/InputWithLabel/InputWithLabel';

function NewClient() {
  const { userData } = useContext(Context);
  interface initial {
    name: string;
    email: string;
    password: string;
    freelancerId: string;
  }

  const initialValue: initial = {
    name: '',
    email: '',
    password: '',
    freelancerId: userData.userId
  };
  const { inputs, handleChange } = useForm(initialValue);
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND}/addClient`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userData.token}`
        },
        body: JSON.stringify(inputs)
      });
      const resJSON = await res.json();
      console.log(resJSON);
    } catch (error: any) {
      console.log('FETCHING ERROR', error);
    }
  };
  return (
    <div>
      <h3>Add New Client</h3>
      <form onSubmit={handleSubmit}>
        <InputWithLabel label="Name" name="name" onChange={handleChange} />
      </form>
    </div>
  );
}

export default NewClient;
