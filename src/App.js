import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AppExpense from './03-react-basics-working-with-components/AppExpense';
import AppExpense2 from './04-react-state-events/AppExpense2';
import AppExpense3 from './05-rendering-lists-conditional-content/AppExpense3';
import AppStyling from './06-styling/AppStyling';
import AppPractice from './08-practice-project/AppPractice';
import AppFragmentPortal from './09-fragments-portals-refs/AppFragmentPortal';
import AppContext from './10-side-effects-reducers-context-api/AppContext';
import AppOptimize from './12-a-look-behind-the-scenes/AppOptimize';
import AppClassBased from './13-class-based-cmp/AppClassBased';
import AppHttp from './14-sending-http-requests/AppHttp';
import AppCustomHooks from './15-building-custom-react-hooks/AppCustomHooks';
import AppForms from './16-working-with-forms/AppForms';
import AppRedux from './18-diving-into-redux/AppRedux';
import AppAdvanceRedux from './19-advanced-redux/AppAdvanceRedux';
import AppReactRouter from './20-building-mpas-with-react-router/AppReactRouter';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/app-expense-1' element={<AppExpense />} />
      <Route path='/app-expense-2' element={<AppExpense2 />} />
      <Route path='/app-expense-3' element={<AppExpense3 />} />
      <Route path='/app-styling' element={<AppStyling />} />
      <Route path='/app-practice' element={<AppPractice />} />
      <Route path='/app-fragment-portal' element={<AppFragmentPortal />} />
      <Route path='/app-context' element={<AppContext />} />
      <Route path='/app-optimize' element={<AppOptimize />} />
      <Route path='/app-class-based' element={<AppClassBased />} />
      <Route path='/app-http' element={<AppHttp />} />
      <Route path='/app-custom-hooks' element={<AppCustomHooks />} />
      <Route path='/app-forms' element={<AppForms />} />
      <Route path='/app-redux' element={<AppRedux />} />
      <Route path='/app-adv-redux' element={<AppAdvanceRedux />} />
      <Route path='/app-react-router' element={<AppReactRouter />} />
    </Routes>
  );
}

export default App;
