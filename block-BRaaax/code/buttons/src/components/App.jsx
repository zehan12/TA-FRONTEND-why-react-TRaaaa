import React from 'react';
import '../styles/App.css'
import Button from './Button';

function App() {
  return <>
      <Button  title="Button" onClickHandler={() => alert("You Clicked Me!")} disabled={false} />
  </>
}

export default App;
