import React, { useState } from 'react';
import './Config.css';
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';  

const Config = () => {
  const [candidates, setCandidates] = useState(Array(8).fill('')); 
  const [options, setOptions] = useState(Array(8).fill('0'));  
  const [serialID, setSerialID] = useState('');  

  const btnclick = async () => {
    const updatedCandidates = [];
    const updatedOptions = [];

    
    if (!serialID) {
      alert("Serial ID is required.");
      return;
    }

    for (let i = 0; i < 8; i++) {
      const candidateValue = document.getElementById(`candidate${i + 1}`).value;
      const optionValue = document.getElementById(`opt${i + 1}`).value;

      if (!candidateValue) {
        alert(`Candidate Name ${i + 1} is required.`);
        return;
      }

      updatedCandidates.push(candidateValue);
      updatedOptions.push(optionValue);
    }

    
    setCandidates(updatedCandidates);
    setOptions(updatedOptions);

    // Map the options to integers
    const summa = updatedOptions.map(option => parseInt(option, 10));

   
    try {
      const response = await axios.post('http://localhost:5000/config', {
        id: serialID,  // Send Serial ID from form input
        pins: summa, // Send the selected options as 'pins'
      });

      console.log('API Response:', response.data);
      alert('Config submitted successfully!');
    } catch (error) {
      console.error('Error submitting config:', error);
      alert('Failed to submit config');
    }
  };

  const renderInputField = (index) => (
    <div className="button-design" key={index}>
      <h1>Button {index + 1}</h1>
      <input
        type="text"
        className='name'
        id={`candidate${index + 1}`}
        placeholder={`Enter Candidate Name ${index + 1}`}
        defaultValue={candidates[index]}
        required
      />
      <select
        id={`opt${index + 1}`}
        className='option'
        defaultValue={options[index]}
      >
        <option value="0">Disable</option>
        {[...Array(8)].map((_, optIndex) => (
          <option key={optIndex} value={optIndex + 1}>
            {optIndex + 1}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="config">
      <Navbar />
      <div className="config-body">
        <div className="config-details">
          <div className="config-head">
            <h1 className='config-text'>Config</h1>
            <input
              type="text"
              placeholder="Enter Your Serial ID"
              value={serialID}  // Bind Serial ID state
              onChange={(e) => setSerialID(e.target.value)}  
              required
            />
          </div>
          <div className="config-submit">
            <button className="submit-btn" onClick={btnclick}>Submit</button>
            <button className="cancel-btn">Cancel</button>
          </div>
        </div>

        <div className="config-right">
          {candidates.map((_, index) => renderInputField(index))}
        </div>
      </div>
    </div>
  );
};

export default Config;
