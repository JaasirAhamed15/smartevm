import React from 'react'
import './Register.css'
import evm_image from '../../assets/evm.jpg'

const Register = () => {
  return (
    <div className='main'>

        <div className="left">
            <div className="reg-head">
                <h1>Registration</h1>
            </div>
            <div className="inputs">
                <input type="text" placeholder='Enter Your Company Name' />
                <input className='address' type="text" placeholder='Enter Your Company Address' />
                <input type="email" placeholder='Enter Your Email id' />
                <input type="password" placeholder='Enter Your Password' />
                <input type="password" placeholder='Enter Your Confirm Password' />
            </div>
            <div className="btn">
                <button className="btn-sub" >Submit</button>
                <button className="can-btn">Cancel</button>
          </div>
        </div>

        <div className="right">
            <div className="image">
                <img src={evm_image} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Register