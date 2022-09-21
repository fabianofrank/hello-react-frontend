import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getMessage } from '../redux/greetingsReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting);

  const config = {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Content-Type': 'application/json',
    },
  };

  async function fetchMessage() {
    await axios.get('http://localhost:3000/api/greetings', config).then((response) => {
      dispatch(getMessage(response.data.message));
    });
  }

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => fetchMessage()}>Generate greeting message</button>
    </div>
  );
};

export default Greeting;
