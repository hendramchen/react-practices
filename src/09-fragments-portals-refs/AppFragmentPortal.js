import React, { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from '../08-practice-project/Users/UserList';
import Breadcrumb from '../components/Breadcrumb';

function AppFragmentPortal() {
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
    <Fragment>
      <Breadcrumb title='09) Diving Deeper: Working with Fragments, Portals and Refs' />
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default AppFragmentPortal;