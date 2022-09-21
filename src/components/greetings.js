import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getMessage } from '../redux/greetingsReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting);

  async function fetchMessage() {
    await axios.get('http://localhost:3000/greetings').then((response) => {
      dispatch(getMessage(response.data.message));
    });
  }

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Greeting;
