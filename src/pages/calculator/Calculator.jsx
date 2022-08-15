import React from 'react'
import style from './Style.module.css'
import { useState } from 'react';

function Calculator() {
  const [currentOperand, setCurrtentOperand] = useState("")
  const[previousOperand, setPreviousOperand] = useState("")
  const[operator,setOperator] = useState("")
  
  const addDigit=(e)=>{
    let digit = e.target.innerText
    let includeDot = currentOperand.includes(".")
    if((currentOperand === "0" && digit === "0") || (digit === "." && includeDot)){
        return
    }
    setCurrtentOperand(`${currentOperand}${digit}`)
  }
//   ########################################################################
  const clear=()=>{
      setCurrtentOperand("")
      setPreviousOperand('')
      setOperator("")
  }
//   ########################################################################
  const delDigit=()=>{
      let number = Array.from(currentOperand)
      number.pop()
      setCurrtentOperand(number.join(''))
  }
//   #############################################################################
  const operation = (e)=>{
    let op = e.target.innerText
    if(currentOperand === '' && op === '=' && previousOperand && operator ){
      setCurrtentOperand(previousOperand)  
      setPreviousOperand('')
      setOperator('')
        return;
    }
    if (
        (currentOperand === "" && op === "=") ||
        (op === "=" && previousOperand === "" && operator === "") ||
        (currentOperand === "" && previousOperand === "" && operator === "")
      ) {
        // setOperator(op)
        return;
      }
    if(currentOperand === '' && (op !== '=' && previousOperand !==''&& operator ==='') ){
        setOperator(op)
        return
    }
    
    if(op === '='){
        switch(operator){
            case '':
                setPreviousOperand(currentOperand)
                setCurrtentOperand("")
                setOperator('')
                return
            case '+': 
                setCurrtentOperand((Number(previousOperand)+Number(currentOperand)).toString())
                setPreviousOperand("")
                setOperator('')
                return
            case '-':
                setCurrtentOperand((Number(previousOperand)-Number(currentOperand)).toString())
                setPreviousOperand("")
                setOperator('')
                return
            case '*':
                setCurrtentOperand((Number(previousOperand || 1)*Number(currentOperand)).toString())
                setPreviousOperand("")
                setOperator('')
                return
            case '÷':
                if(previousOperand){
                    setCurrtentOperand((Number(previousOperand)/Number(currentOperand)).toString())
                }else{
                    setPreviousOperand(currentOperand)
                }
                setPreviousOperand("")
                setOperator('')
                return
            default: return
        }
    }else{
      switch (operator) {
        case "":
          setPreviousOperand(currentOperand);
          setCurrtentOperand("");
          setOperator(op);
          return;
        case "+":
          setPreviousOperand(Number(previousOperand) + Number(currentOperand));
          setCurrtentOperand("");
          setOperator(op);
          return;
        case "-":
          setPreviousOperand(Number(previousOperand) - Number(currentOperand));
          setCurrtentOperand("");
          setOperator(op);
          return;
        case "*":
          if(currentOperand === ''){
              setOperator(op)
              return
          }else{
            setPreviousOperand(
                Number(previousOperand || 1) * Number(currentOperand)
              );
              setCurrtentOperand("");
              setOperator(op);
          }
          return;
        case "÷":
          if (currentOperand === '') {
              setOperator(op)
              return
        } else {
              setPreviousOperand(
                Number(previousOperand) / Number(currentOperand)
              );
          }
          setCurrtentOperand("");
          setOperator(op);
          return;
        default: return
      }
    }
  }

//   #############################################################################
//   const equal =(e)=>{
//       operation(e)
//       setCurrtentOperand('')
//       setOperator('')
//   }
  return (
    <div className={style.calculatorgrid}>
      <div className={style.output}>
        <div className={!operator && !currentOperand ?style.currentoperand:style.previousoperand}>
          {previousOperand} {operator}
        </div>
        <div className={style.currentoperand}>{currentOperand}</div>
      </div>
      <button onClick={clear} className={style.spantwo}>AC</button>
      <button onClick={delDigit}>DEL</button>
      <button onClick={operation}>÷</button>
      <button onClick={addDigit}>1</button>
      <button onClick={addDigit}>2</button>
      <button onClick={addDigit}>3</button>
      <button onClick={operation}>*</button>
      <button onClick={addDigit}>4</button>
      <button onClick={addDigit}>5</button>
      <button onClick={addDigit}>6</button>
      <button onClick={operation}>+</button>
      <button onClick={addDigit}>7</button>
      <button onClick={addDigit}>8</button>
      <button onClick={addDigit}>9</button>
      <button onClick={operation}>-</button>
      <button onClick={addDigit}>.</button>
      <button onClick={addDigit}>0</button>
      <button id='55' onClick={operation} className={style.spantwo}>=</button>
    </div>
  );
}

export default Calculator