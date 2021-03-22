import React from 'react'


const Form = (props) => {
    return (
        <div className='container' >
            <h1>Sign-up Form</h1>
          <form onSubmit={props.ValidateForm} >
            <label htmlFor="name">Name</label>
            <input type="text" data-testid ='name'  onChange={props.UpdateName} />
            
            <label htmlFor="email">Email address</label>
            <input type="email" data-testid = 'email' onChange={props.UpdateEmail} />

            <label htmlFor="gender">Gender</label>
            <select name="gender" data-testid = 'gender' value={props.gender}  onChange={props.UpdateGender} >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
            </select>

            <label htmlFor="phone">Phone Number</label>
            <input type="tel"  data-testid = 'phoneNumber' onChange={props.UpdatePhone} />

            <label htmlFor="password">Password</label>
            <input type="password" data-testid = 'password' onChange={props.UpdatePassword} />

            <button  data-testid = 'submit'>Submit</button>
            <p>{props.errorMsg}</p>
          </form>
        </div>
    )
}

export default Form
