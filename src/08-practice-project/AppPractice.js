import React, { useState } from 'react';

import AddUser from './Users/AddUser';
import UsersList from './Users/UserList';
import Breadcrumb from '../components/Breadcrumb';

function AppPractice() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <Breadcrumb title='08) Practice Project' />
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default AppPractice;