import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {Inc, Dec} from './redux/reducers/index'

const App = () => {

  const curState = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <div style={{width: '100%', fontSize: '12px'}}>
      <h1>Increment & Decrement</h1>
      <div style={{width: '100%', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h3>{curState}</h3>
      </div>
      <div style={{width: '100%', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <button onClick={() => dispatch(Inc(10))}>INC</button>
        <button onClick={() => dispatch(Dec(5))}>DEC</button>
      </div>
    </div>
  )
};

export default App;