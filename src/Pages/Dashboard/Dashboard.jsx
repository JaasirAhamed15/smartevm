import React from 'react'
import './Dashboard.css'
import Navbar from '../../Components/Navbar/Navbar'
import evm from '../../assets/evm.jpg'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="dashboard">
                <div className="header">
                    <div className="left">
                        <h2>SMART EVM</h2>
                        <p>The motivation behind this EVM project is to create an electronic voting machine (EVM) that will help overcome the challenges posed by manual voting machines.</p>
                    </div>
                    <div className="right">
                        <img src={evm} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard