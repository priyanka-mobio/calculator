import { useState } from 'react';

function App() {

  const [ calc, setCalc] = useState("");
   const [result,setResult] = useState("");

  const oper = ['/', '*', '+', '-', '.'];

  const updateCal = value => {
      if(oper.includes(value) && calc === '' || 
        oper.includes(value) && oper.includes(calc.slice(-1)) 
      )
  
    {
      return;
    }
    setCalc(calc+value);

    if(!oper.includes(value)){
      setResult(eval(calc + value).toString());
    }

  }

  const createDigit = () => {
    const digits = [];

    for(let i=1; i<10; i++){
        digits.push(
          <button onClick={()=> updateCal(i.toString()
          )}key={i}>{i} </button> 
        )   
      }
      return digits;
  }

  const calculate = () => {
     setCalc(eval(calc).toString());
  }

  const deletebtn = () =>{
    if(calc == ''){
      return;
    }
    const value =calc.slice(0, -1);
    setCalc(value);
  }

  return (
    <div className="App">
        <div className="calculator"> 
          <div className="display">
          {result ?  <span> {result} </span> : ''} 
          &nbsp;
          {calc || "0"}
          </div>
          
          <div className="operator"> 
            <button onClick = { ()=> updateCal('/')}> / </button>
            <button onClick = {()=> updateCal('*')}> * </button>
            <button onClick = {()=> updateCal('+')}> + </button>
            <button onClick = {()=> updateCal('-')}> - </button>
            <button onClick={deletebtn}> DEL </button>
          </div>

          <div className="digits"> 
            {createDigit()}
            <button onClick={()=> updateCal('0')}> 0 </button>
            <button onClick={()=> updateCal('.')}> . </button>
           <button onClick={calculate}> = </button>
          </div>

        </div>
    </div>
  );
}

export default App;
