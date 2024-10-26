import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css'


const FormValidations = () => {

  const navigate =useNavigate()

  const [formData, setFormData] = useState({
    zipCode: '',
    name: '',
    email: '',
    city:'',
    state:''
  });
  let totalQuestions = Object.keys(formData).length
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    let stepErrors = {};
    if (currentStep === 0 && !/^\d{6}$/.test(formData.zipCode)) {
      stepErrors.zipCode = 'Invalid ZIP code.';
    }
    if (currentStep === 1 && formData.name.trim() === '') {
      stepErrors.name = 'Name is required.';
    }
    if (currentStep === 2 && !/\S+@\S+\.\S+/.test(formData.email)) {
      stepErrors.email = 'Invalid email address.';
    }
    if(currentStep === 3 && formData.city.trim() ===''){
      stepErrors.city ='City is required.'         
    }
    if(currentStep === 4 && formData.state.trim() ===''){
      stepErrors.state ='State is required.'
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const startOver=()=>{
    setCurrentStep(0)
    formData.zipCode=''
    formData.name=''
    formData.email=''
    formData.city=''
    formData.state=''

  }

  const handleSubmit = () => {
    if (validateStep()) {
      console.log('Form Data:', formData);
      setCurrentStep(currentStep+1)
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="form-container-main">
      <form className='form-container'>
        {currentStep === 0 && (
          <div className="form-step">
            <button className='assignment-button' onClick={()=>navigate("/assignment1")} > Assignment1 </button>
            <h2>Enter your zip code</h2>
            <p>This will help us match you to the specialized contractors in your area.</p>
            <input
              type="text"
              name="zipCode"
              placeholder="Enter Zip Code"
              value={formData.zipCode}
              onChange={handleChange}
              className={errors.zipCode ? 'error-input' : ''}
            />
            {errors.zipCode && <small className="error">{errors.zipCode}</small>}
            <button type="button" className="button-next" onClick={nextStep}>Next</button>
            <p className='remaining'> current Question: {currentStep+1}</p>
            <p className='remaining'> Remaining: {totalQuestions - (currentStep+1)}</p>

          </div>
        )}

        {currentStep === 1 && (
          <div className="form-step">
            <h2>Enter your name</h2>
            <p>This will help us match you to the specialized contractors in your area.</p>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error-input' : ''}
            />
            {errors.name && <small className="error">{errors.name}</small>}
            <button type="button" className="button-back" onClick={prevStep}>Back</button>
            <button type="button" className="button-next" onClick={nextStep}>Next</button>
            <p> Question: {currentStep+1}</p>
            <p className='remaining'> Remaining: {totalQuestions - (currentStep+1)}</p>

          </div>
        )}

        {currentStep === 2 && (
          <div className="form-step">
            <h2>Enter your email</h2>
            <p>This will help us match you to the specialized contractors in your area.</p>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error-input' : ''}
            />
            {errors.email && <small className="error">{errors.email}</small>}
            <button type="button" className="button-back" onClick={prevStep}>Back</button>
            <button type="button" className="button-next" onClick={nextStep}>Next</button>
            <p> Question: {currentStep+1}</p>
            <p className='remaining'> Remaining: {totalQuestions - (currentStep+1)}</p>

          </div>
        )}

        {currentStep ===3 && (
          <div className='form-step'>
            <h2> Enter your City </h2>
            <p>This will help us match you to the specialized contractors in your area.</p>
            <input 
              type='text'
              name='city'
              value={formData.city}
              placeholder="Enter your city"
              onChange={handleChange}
              className={errors.city ? 'error-input':""}
            />
            {errors.city &&  <small className='error'> {errors.city} </small>}
            <button type='button' className='button-back' onClick={prevStep}> Back </button>
            <button type='button' className='button-next' onClick={nextStep}> Next </button>
            <p> Question: {currentStep+1}</p>
            <p className='remaining'> Remaining: {totalQuestions - (currentStep+1)}</p>
             
          </div>
        )}

        {currentStep ===4 &&(
          <div className='form-step'>
            <h2>Enter Your State</h2>
            <p>This will help us match you to the specialized contractors in your area.</p>
            <input 
              type='text'
              name='state'
              value={formData?.state}
              placeholder='Enter Your State'
              onChange={handleChange}
              className={errors.state ? 'error-input' : ''}
            />
            {errors.state && <small className='error'> {errors.state} </small> }
            <button type='button' className='button-back' onClick={prevStep}> Back </button>
            <button type='button' className='button-next' onClick={handleSubmit}> Submit </button>
            <p> Question: {currentStep+1}</p>
            <p className='remaining'> Remaining: {totalQuestions - (currentStep+1)}</p>

          </div>
        )}

        {currentStep === 5 && (
          <div className="form-step summary-form">
            <h2>Summary</h2>
            <p><strong>Zip Code:</strong> {formData.zipCode}</p>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>City:</strong> {formData.city}</p>
            <p><strong>City:</strong> {formData.state}</p>


            <button type="button" className="button-back" onClick={startOver}>Start Over</button>
          </div>
        )}
      </form>
    </div>
  );
};
 
export default FormValidations;
