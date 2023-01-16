import './App.css';
import {useState} from 'react'
function App() {
  const [output , setOutput] = useState('')
  const operators = ["/" , "*" , "+","-" , "."]
  const createDigits =()=>{
    const digits = []

    for(let i=1 ; i<10 ; i++){
      digits.push(
        <button onClick={()=>calculating(i.toString())} key={i}>{i}</button>
      )
    }
    return digits
  }

  const calculating = (value)=>{
    if(
      operators.includes(value) & output === '' ||
      operators.includes(value) & operators.includes(output.slice(-1))
    ){
      return;
    }
    setOutput(output+value)
  }
 
  const calculated = ()=>{
    setOutput(eval(output).toString())
  }

  return (
    <div>
      <div className="output">
        {output || '0'}
      </div>
      <div className="operator">
        <button onClick={()=> calculating('/')}>/</button>
        <button onClick={()=> calculating('*')}>*</button>
        <button onClick={()=> calculating('+')}>+</button>
        <button onClick={()=> calculating('-')}>-</button>
      </div>
      <div className="numbers">
        {createDigits()}
        <button onClick={()=> calculating('.')}>.</button>
        <button onClick={()=> calculating('0')}>0</button>
        <button onClick={calculated}>=</button>
      </div>
    </div>
  );
}


export default App;
