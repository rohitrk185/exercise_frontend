import React,{useEffect, useState} from 'react'
// import { useNavigate } from 'react-router-dom'

import '../bmi.css'


function Bmi() {
  // const navigate = useNavigate();

  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState(0)
  const [message, setMessage] = useState('')
  const [imgSrc, setImgSrc] = useState(null);

  const calcBmi = (event) =>{
    event.preventDefault()

    if(weight ===0 || height ===0){
      alert("please enter a valid weight and height")
    }else{
      let BMI =(weight/(height*height)*10000)
      setBmi(BMI.toFixed(1))

      //logic for message
      if(BMI > 0 && BMI < 18){
        setMessage("You are Underweight.")
      }else if(BMI >=18 && BMI <25){
        setMessage("You are Healthy weight")
      }else if(BMI >= 25) {
        setMessage("You are Overweight.")
      }
    }
  }


  useEffect(() => {
    if(bmi < 1){
      setImgSrc(null);
    } else if(bmi<= 18){
      setImgSrc(require('../assets/underweight.png'))
    }else if(bmi > 18 && bmi < 25){
      setImgSrc(require('../assets/healthy.png'))
    }else if(bmi >= 25){
      setImgSrc(require('../assets/overweight.png'))
    }
  }, [bmi])



  const reload = (e) => {
    e.preventDefault();

    setHeight('');
    setWeight('');
    setBmi(0);
    setMessage('');
    setImgSrc(null);
  }



  return (
    <div className="bmi">
        <div className='container'>
            <h2 className='center heading'>BMI Calculator</h2>

            <form onSubmit={calcBmi} className='bmi-form'>
            <div>
                <label>Height (in Cm)</label>
                <br />
                <input value={height} onChange={(event) =>setHeight(event.target.value)}/>
            </div>
                
            <br />
            
            <div>
                <label>Weight (in KG)</label>
                <br />
                <input value={weight} onChange={(event)=>setWeight(event.target.value)}/>
            </div>

            <br />

            <div className='button-group'>
                <button className='button button-outline' onClick={reload} type='submit'>Reload</button>
                <button className='button' type='submit'>Submit</button>
            </div>
        </form>

          <div className='center'>
            <h3>
              Your BMI is : {(bmi > 0) ? bmi : ''}
            </h3>
            <p>{message}</p>
          </div>

          <div className='img-container'>
            <img src={imgSrc} alt='' />
          </div>
        </div>
    </div>
)};

export default Bmi;