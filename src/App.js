import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {

  const [amount,setAmount]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)
  const [interest,setInterest]=useState(0)


  const [isAmount,setIsAmount]=useState(true)
  const [isRate,setIsRate]=useState(true)
  const [isYear,setIsYear]=useState(true)



  const validateData=(e)=>
  {
    const {name,value} =e.target
    // console.log(name,value);
    //console.log(!!value.match(/^[0-9]+$/));   !! for converting to boolean
    if(!!value.match(/^[0-9]*.?[0-9]+$/))
    {
      if(name==='amount')
      {setAmount(value)
      setIsAmount(true)}

      else if(name==='rate')
      {setRate(value)
      setIsRate(true)}

      else
      {setYear(value)
      setIsYear(true)}
    }
    else
    {
      if(name==='amount')
      {setAmount(value)
      setIsAmount(false)}

      else if(name==='rate')
      {setRate(value)
      setIsRate(false)}

      else
      {setYear(value)
      setIsYear(false)}
    }
  }
  
  const handleCalculator=(e)=>
  {
    e.preventDefault()
    if(!amount || !rate || !year)
    {
      alert('Please fill the form completely')
    }
    else
    {
      setInterest(amount*rate*year/100)
    }
  }

  const handleReset=(e)=>
  {
    setAmount(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsAmount(true)
    setIsRate(true)
    setIsYear(true)
  }

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark '>

      <div className='bg-light p-5 rounded' style={{width:'500px'}}>
        <h1>Simple Interest App</h1>
        <p>Calculate Simple Interest</p>
        
        <div style={{height:'150px'}} className="bg-warning mt-5 d-flex justify-content-center align-items-center w-100 flex-column shadow">
            <h1> ₹ {interest}</h1>
            <p>Total Simple interest</p>
        </div>

        <form className='mt-5' onSubmit={handleCalculator}>
          <div className='mb-3'>
          <TextField name='amount' value={amount || ""} onChange={(e)=>validateData(e)} className='w-100' id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
          </div>

          { !isAmount &&
            <div>
            <p className='text-danger'>Invalid input</p>
          </div>}

          <div className='mb-3'>
          <TextField name='rate' value={rate || ""} onChange={(e)=>validateData(e)}  className='w-100' id="outlined-basic" label="Rate of Interest  (p.a) %" variant="outlined" />
          </div>

          { !isRate &&
            <div>
            <p className='text-danger'>Invalid input</p>
          </div>}

          <div className='mb-3'>
          <TextField name='year' value={year || ""} onChange={(e)=>validateData(e)}  className='w-100' id="outlined-basic" label="Year (Yr)" variant="outlined" />
          </div>

          { !isYear &&
            <div>
            <p className='text-danger'>Invalid input</p>
          </div>}

          <div className='mt-4'>
            <Stack direction="row" spacing={2}>
              <Button type='submit' disabled={isAmount && isRate && isYear? false:true} variant="contained" style={{height:'50px',width:'200px'}} className='bg-secondary'>Calculate</Button>

              <Button onClick={handleReset} variant="outlined" style={{height:'50px',width:'200px'}} className='text-secondary border border-secondary'>Reset</Button> 
            </Stack>
          </div>
        </form>

      </div>
    </div>
  );
}

export default App;
