import React, { useEffect, useState } from 'react';
import mobileDivider from './assets/pattern-divider-mobile.svg';
import desktopDivider from './assets/pattern-divider-desktop.svg';
import diceBtn from './assets/icon-dice.svg';
import './App.scss';

const url = 'https://api.adviceslip.com/advice';
function App() {
  const [id, setID] = useState('');
  const [quote, setQuote] = useState('');

  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setID(data.slip.id);
        setQuote(data.slip.advice);
      });
    // console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='card'>
        <h4 className='eyebrow'>Advice #{id}</h4>
        <h1 className='quote'>"{quote}"</h1>
        <img className='mobile-divider' src={mobileDivider} alt='' />
        <img className='desktop-divider' src={desktopDivider} alt='' />
        <button className='btn' onClick={fetchData}>
          <img src={diceBtn} alt='' />
        </button>
      </div>
    </>
  );
}

export default App;
