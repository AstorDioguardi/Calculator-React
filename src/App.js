import './App.css';
import './stylesheets/Button.css';
import './stylesheets/Screen.css';
import './stylesheets/ClearButton.css';

import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';

import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  };

  const result = () => {
    if (input) {
    setInput(evaluate(input));
    } else {
      alert("Please, select numbers before");
    }
  };

  return (
    <div className='App'>
      <div className='text__container'>
        <h1 className='text__title'>CALCULATOR</h1>
        <h3 className='text__subtitle'>Developed by Astor Dioguardi</h3>
      </div>
      <div className='calculator__container'>
        <Screen input={input}/>
        <div className='calculator__row'>
          <Button checkClick={addInput}>1</Button>
          <Button checkClick={addInput}>2</Button>
          <Button checkClick={addInput}>3</Button>
          <Button checkClick={addInput}>+</Button>
        </div>
        <div className='calculator__row'>
          <Button checkClick={addInput}>4</Button>
          <Button checkClick={addInput}>5</Button>
          <Button checkClick={addInput}>6</Button>
          <Button checkClick={addInput}>-</Button>
        </div>
        <div className='calculator__row'>
          <Button checkClick={addInput}>7</Button>
          <Button checkClick={addInput}>8</Button>
          <Button checkClick={addInput}>9</Button>
          <Button checkClick={addInput}>*</Button>
        </div>
        <div className='calculator__row'>
          <Button checkClick={result}>=</Button>
          <Button checkClick={addInput}>0</Button>
          <Button checkClick={addInput}>.</Button>
          <Button checkClick={addInput}>/</Button>
        </div>
        <div className='calculator__row'>
          <ClearButton checkClear={() => setInput('')}/>
        </div>
      </div>
    </div>
  );
}

export default App;
