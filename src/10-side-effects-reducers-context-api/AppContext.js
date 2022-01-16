import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';
import Breadcrumb from '../components/Breadcrumb';

function AppContext() {
    const ctx = useContext(AuthContext);

    return (
        <React.Fragment>
            <MainHeader />
            <main>
                {!ctx.isLoggedIn && <Login />}
                {ctx.isLoggedIn && <Home />}
            </main>
            <Breadcrumb title='10) Advanced: Handling Side Effects, Using Reducers and Using the Context API' />
        </React.Fragment>
    );
}

export default AppContext;