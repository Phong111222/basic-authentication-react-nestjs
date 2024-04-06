import { useState } from 'react';
import './App.css';
import axiosInstance from './config/axios';

function App() {
  const [info, setInfo] = useState<any>({});

  const login = async () => {
    await axiosInstance({
      method: 'POST',
      url: '/auth/login',
      data: {
        userName: 'admin',
        password: 'admin',
      },
    });
  };

  const getInfo = async () => {
    const res = await axiosInstance({
      method: 'GET',
      url: '/users/me',
    });

    setInfo(res.data);
  };

  const logout = async () => {
    const res = await axiosInstance({
      method: 'POST',
      url: '/auth/logout',
    });

    if (res.data.success) setInfo('');
  };

  return (
    <>
      <h1 className='read-the-docs'>Basic Authentication</h1>
      <div>
        <button onClick={() => login()}>Login</button>
        <button onClick={() => getInfo()}>Get info</button>
        <button onClick={() => logout()}>Logout</button>
      </div>
      <p className='read-the-docs'>{JSON.stringify(info)}</p>
    </>
  );
}

export default App;
