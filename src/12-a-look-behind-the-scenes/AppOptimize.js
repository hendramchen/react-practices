import React, { useState, useCallback, useMemo } from 'react';

import '../App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function AppOptimize() {
  const [listTitle, setListTitle] = useState('My List');
  // everytime component re-render, function will recreated
  // to prevent this, we should useCallback
  // once we add useCallback for changeTitleHandler
  // Button component will not re-render, but 
  // Button component also have to use React.memo
  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default AppOptimize;