import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { login } from './userSlice';

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userReducer);

  const handleEmailChange = () => {
    dispatch(login({ name: 'Vadym', email: 'newEmail@gmail.com', age: 22 }));
  };

  return (
    <div>
      <Button
        type={'primary'}
        icon={<SearchOutlined />}
        onClick={handleEmailChange}
      >
        Change email
      </Button>
      <h2>Email: {user.email}</h2>
      <h2>Name: {user.name}</h2>
      {!user.age && <h2>Age: </h2>}
      {!!user.age && <h2>Age: {user.age}</h2>}
    </div>
  );
};

export default User;
