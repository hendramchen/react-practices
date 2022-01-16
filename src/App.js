import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AppExpense from './03-react-basics-working-with-components/AppExpense';
import AppExpense2 from './04-react-state-events/AppExpense2';
import AppExpense3 from './05-rendering-lists-conditional-content/AppExpense3';
import AppStyling from './06-styling/AppStyling';
import AppPractice from './08-practice-project/AppPractice';
import AppFragmentPortal from './09-fragments-portals-refs/AppFragmentPortal';

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
    </Routes>
  );
}

export default App;
