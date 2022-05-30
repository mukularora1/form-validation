import React, { useState } from 'react';
import './form.css';

function Form() {
  let dataObj={
     firstName: "",
     lastName: "",
     email: "",
     password: "",
     confirmPassword: "",
  }
  let [data, setData]=useState(dataObj);
  let errorObj={
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
 }
  let[error,setError]= useState(errorObj);

  const handleOnchange=(e)=>{
    let {value,name}=e.target;
    // setData({...data,[name]:value});
    setData((obj)=>{

      if(name==="firstName"){
        
        return {...obj,firstName:value};
        
      }
      if(name==="lastName"){
        return {...obj,lastName:value}

      }
      if(name==="email"){
        return {...obj,email:value}

      }
      if(name==="password"){
        return {...obj,password:value}

      }
      if(name==="confirmPassword"){
        return {...obj,confirmPassword:value}

      }
    })

  }
  const handlesubmit=(e)=>{
    alert("Do you really want to Submit the form?");
    e.preventDefault();
   
    setError((error)=>{

      if(data.firstName===""){
        return {...error, firstName:"Input field is empty"}
      }
     else{
       error.firstName="";
     }
      
      if(data.lastName===""){
        return {...error, lastName:"Input field is empty"}
      }
      else{
        error.lastName=""
      }
      if(data.email===""){
        return {...error, email:"Input field is empty"}
      }
      else{
        error.email=""
      }
      if(data.password===""){
        return {...error, password:"Input field is empty"}
      }
      else{
        error.password=""
      }

      if(data.confirmPassword===""){
        return {...error, confirmPassword:"Input field is empty"}
      }
      else{
        error.confirmPassword=""
      }
      if(data.password !== data.confirmPassword){
        return{...error, confirmPassword:"password not match"};
      }
     

      
    })
    console.log(data);
    
  }
  const handlereset=()=>{
    alert("Do you really want to Reset the form?");
    setData(dataObj);


  }
  return (
      <>

    
    <form className='form' action="#" onSubmit={(e)=> e.preventDefault() }> 
    <h1 className='form__heading'>Sign In</h1>
        <label>First Name:</label>
        <input placeholder='enter first name...' type="text" onChange={handleOnchange} name="firstName" value={data.firstName}/>
        <div className='error'>{error.firstName}</div>
        <label>Last Name:</label>
        <input placeholder='enter last name...' type="text" onChange={handleOnchange} name="lastName" value={data.lastName}/>
        <div className='error'>{error.lastName}</div>
        <label>Email:</label>
        <input placeholder='enter email...' type="email" onChange={handleOnchange} name="email" value={data.email}/>
        <div className='error'>{error.email}</div>
        <label>Password:</label>
        <input placeholder='enter password...'type="password" onChange={handleOnchange} name="password" value={data.password}/>
        <div className='error'>{error.password}</div>
        <label>Confirm Password:</label>
        <input placeholder='enter confirm password...' type="password" onChange={handleOnchange} name="confirmPassword" value={data.confirmPassword}/>
        <div className='error'>{error.confirmPassword}</div>
    <div className='buttons'>

  <button className="btn__submit" onClick={handlesubmit}>submit</button>
  <button className="btn__reset" onClick={handlereset}>reset </button>
</div>

    </form>
      </>
  )
}

export default Form