import AppExpense from './03-react-basics-working-with-components/AppExpense';
import AppExpense2 from './04-react-state-events/AppExpense2';
import AppExpense3 from './05-rendering-lists-conditional-content/AppExpense3';
import AppStyling from './06-styling/AppStyling';

import './App.css';

function App() {
  return (
    <>
      <div className='lecture'>
      <AppExpense />
      </div>
      <div className='lecture'>
      <AppExpense2 />
      </div>
      <div className='lecture'>
      <AppExpense3 />
      </div>
      <div className='lecture'>
      <AppStyling />
      </div>
    </>
  );
}

export default App;
