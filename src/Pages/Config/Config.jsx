import React from 'react'
import './Config.css'
import Navbar from '../../Components/Navbar/Navbar'

const Config = () => {
    return (
        <div className='config'>
            <Navbar />
            <div className="config-body">
                <div className="config-details">
                    <h1>Config</h1>
                    <input type="text" placeholder='Enter Your Serial ID' />
                    <div className="config-submit">
                        <button>Submit</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Config