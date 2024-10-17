import React from 'react'
import './Dashboard.css'
import Navbar from '../../Components/Navbar/Navbar'
import evm from '../../assets/evm.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import model from '../../assets/model.jpg';
import model2 from '../../assets/model2.jpg';

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
            {/* new features section */}
            <div className="features">
                <div className="content">
                    <div className="left">
                        <img src={model} alt="" />
                    </div>
                    <div className="center"></div>
                    <div className="right">
                        <h2>Whats New</h2>
                        <div className="list">
                            <div className="item">
                                <parseFloat><strong>Blockchain-Integrated Security</strong></parseFloat>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                            <div className="item">
                                <p><strong>Real-Time Monitoring with Admin Panel</strong></p>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                            <div className="item">
                                <p><strong>Crypto Cloud Storage</strong></p>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                            <div className="item">
                                <p><strong>User-Friendly Voting Interface</strong></p>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                            <div className="item">
                                <p><strong>Configurable via Application Interface</strong></p>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <div className="content">
                    <div className="left">
                        <h2>Product</h2>
                    </div>
                    <div className="right">
                        <img src={model2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard