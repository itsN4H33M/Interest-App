import { Stack, TextField, Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {

  const [interest, setInterest] = useState(0)

  const [principle, setPrinciple] = useState(0)

  const [rate, setRate] = useState(0)

  const [year, setYear] = useState(0)

  const [isPrincipleValid,setisPrincipleValid] = useState(true)

  const [isRateValid,setisRateValid] = useState(true)

  const [isYearValid,setisYearValid] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!principle || !rate || !year) {
      alert('Pleast fill the form')
    }
    else{
      setInterest(principle*rate*year/100)
    }
  }

  const validateInput = (e) => {
    const {value,name} = e.target
    // '!!' for making it boolean
    if(!!value.match(/^[0-9]+$/)){
      if(name === 'principle'){
        setPrinciple(value)
        setisPrincipleValid(true)
      }else if(name === 'rate'){
        setRate(value)
        setisRateValid(true)
      }else{
        setYear(value)
        setisYearValid(true)
      }
    }
    else{
      if(name === 'principle'){
        setPrinciple(value)
        setisPrincipleValid(false)
      }else if(name === 'rate'){
        setRate(value)
        setisRateValid(false)
      }else{
        setYear(value)
        setisYearValid(false)
      }
    }
  }

  const handleReset = () => {
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setisPrincipleValid(true)
    setisRateValid(true)
    setisYearValid(true)
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark" style={{ height: '100vh' }}>
      <div className='bg-light w-50 rounded p-5'>
        <div className="heading">
          <h3>Simple Calculator</h3>
          <p>Calculate your simple interest easily!</p>
        </div>
        <div style={{ height: '150px' }} className="interest-card text-light d-flex flex-column justify-content-center    align-items-center bg-primary rounded shadow">
          <h2>&#8377; {interest}</h2>
          <p>Total simple interest</p>
        </div>

        <form className='mt-5' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic" value={principle || ''} label="&#8377; Principle Amount" variant="outlined" name='principle' onChange={(e) => validateInput(e)} />
          </div>
          {
            !isPrincipleValid &&
            <div className='mb-3 text-danger'>
              *Invalid Input
            </div>
          }
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic" value={rate || ''} label="Rate of interest (p.a) %" variant="outlined" name='rate' onChange={(e) => validateInput(e)} />
          </div>
          {
            !isRateValid &&
            <div className='mb-3 text-danger'>
              *Invalid Input
            </div>
          }
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic" value={year || ''} label="Time Period (Yr)" variant="outlined" name='year' onChange={(e) => validateInput(e)} />
          </div>
          {
            !isYearValid &&
            <div className='mb-3 text-danger'>
              *Invalid Input
            </div>
          }
          <div>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button type='submit' variant="contained" disabled={isPrincipleValid && isYearValid && isRateValid ? false : true}>CALCULATE</Button>
            <Button onClick={handleReset} variant="outlined">RESET</Button>
          </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
