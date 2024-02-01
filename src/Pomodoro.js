import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './Pomodoro.css';

function Pomodoro() {
   const [type, setType] = useState('work');
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [workSecond, setWorkSecond] = useState(1500);
  const [breakSecond, setBreakSecond] = useState(300);
  const [flag, setFlag] = useState(false);
  const [resetFlag, setResetFlag] = useState(true);  
   
  useEffect(() => {
    if (flag && type === 'work') {
     
      if(workSecond>0){
        setTimeout(()=>{
            setWorkSecond(workSecond-1);
        },1000);
      }
      if(workSecond===0){
        alert("Work Time is OVER,Go to a Break!");
        setType("Break");
        setWorkSecond(workDuration*60);
      }
    }
     
    if (flag && type === 'Break') { 
       

      if(breakSecond>0){
        setTimeout(()=>{
            setBreakSecond(breakSecond-1);
        },1000);
      }
      if(breakSecond===0){
        alert("Break Time is OVER,Go to  work!");
        setType("work");
        setBreakSecond(breakDuration*60);
      }
    }
    
  },[type,flag,workSecond,breakSecond,workDuration,breakDuration]);


  const convertor = (sec) => {
    let m = parseInt(sec / 60).toString();
    let s = parseInt(sec % 60).toString();
    if (m.length === 1) m = '0' + m;
    if (s.length === 1) s = '0' + s;
    return m + ":" + s;
  }
  const handleClick = (e) => {
    e.preventDefault();
    setWorkSecond(workDuration * 60);
    setBreakSecond(breakDuration * 60);
  }

  const handleReset = () => {
   setFlag(false);
    setResetFlag(true); 
    setWorkDuration(25);
    setBreakDuration(5);
    setBreakSecond(300);
    setWorkSecond(1500);
    setType('work');
    
  }
  return (
    <div className='displayy'>
      <h1>{type === "work" ? convertor(workSecond) : convertor(breakSecond)}</h1>
      <h1>{type === 'work' ? "work" : "Break"}-Time</h1>

      <div className='btns'>
        <button onClick={() => { setFlag(true); setResetFlag(false) }} disabled={flag}>Start</button>
        <button onClick={() => { setFlag(false); setResetFlag(false) }} disabled={!flag}>Stop</button>
        <button onClick={handleReset} disabled={resetFlag}>Reset</button><br/>
      </div>

      <div>
        <form onSubmit={handleClick}>

          <input type='number' value={workDuration>=0?workDuration:alert("Enter Valid Time")} onChange={(e) => setWorkDuration(e.target.value)} disabled={flag} />
          <input type='number' value={breakDuration>=0?breakDuration:alert("Enter Valid Time")} onChange={(e) => setBreakDuration(e.target.value)} disabled={flag} />
          <input type='submit' value="set" disabled={flag} />
        </form>
      </div>
    </div>
  )
}

export default Pomodoro