import { useSelector, useDispatch } from 'react-redux';
import { userAction } from '../store/user';

import classes from './UserProfile.module.css';

const UserProfile = () => {
  const fullName = useSelector((state) => state.user.fullName);
  const isActive = useSelector((state) => state.user.isActive);

  const dispatch = useDispatch();

  const changeFullNameHandler = () => {
    dispatch(userAction.changeFullName('Hendra'));
  }

  const changeStatus = () => {
    dispatch(userAction.changeIsActive(true));
  }

  return (
    <main className={classes.profile}>
      <h2>My User Profile: { fullName }</h2>
      {isActive && 'Active'}
      {!isActive && 'In-active'}
      <button onClick={changeFullNameHandler}>Change Full name</button>
      <button onClick={changeStatus}>Change status</button>
    </main>
  );
};

export default UserProfile;