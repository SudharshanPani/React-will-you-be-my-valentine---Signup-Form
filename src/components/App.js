import React, {useState} from "react";
import '../styles/App.css';
import Form from '../components/Form'

const App = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [gender,setGender] = useState('Male')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [errorMsg,seterrorMsg] = useState('')
  
  const UpdateName = (e)=>{
    setName(e.target.value)
  }

  const UpdateEmail=(e)=>{
    setEmail(e.target.value)
  }

  const UpdateGender=(e)=>{
    setGender(e.target.value)
  }

  const UpdatePhone=(e)=>{
    setPhone(e.target.value);
  }

  const UpdatePassword=(e)=>{
    setPassword(e.target.value)
  }

  const ValidateForm=(e)=>{
    if(!name || !email || !gender || !phone || !password){
      e.preventDefault();
      seterrorMsg("All fields are mandatory");
      return;
    }
    else if(!name.match(/^[0-9a-z]+$/)){
      e.preventDefault();
      seterrorMsg("Name is not alphanumeric");
      return;
    }
    else if(!email.match(/\S+@\S+\.\S+/)){
      e.preventDefault();
      seterrorMsg("Email must contain @")
      return;
    }
    else if(!phone.match(/^\d{10}$/)){
      e.preventDefault();
      seterrorMsg("Phone Number must contain only numbers");
      return;
    }
    else if(password.length<6){
      e.preventDefault();
      seterrorMsg("Password must contain atleast 6 letters");
      return;
    }
    else{
      e.preventDefault();
      var displayName = email.substring(0, email.lastIndexOf("@"));
      seterrorMsg("Hello "+displayName);
    }
  }

  return (
    <div id="main">
        <Form 
        UpdateName ={UpdateName}
        UpdateEmail = {UpdateEmail}
        UpdateGender = {UpdateGender}
        Gender={gender}
        UpdatePhone = {UpdatePhone}
        UpdatePassword = {UpdatePassword}
        errorMsg = {errorMsg}       
        ValidateForm={ValidateForm} 
        />
    </div>
  )
}

export default App;
