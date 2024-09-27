import React, { useState } from 'react';
import './Config.css';
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';  // Import axios for making the API call

const Config = () => {
  const [candidates, setCandidates] = useState(Array(8).fill(''));  // To store submitted candidate names
  const [options, setOptions] = useState(Array(8).fill('0'));  // To store submitted options
  const [serialID, setSerialID] = useState('');  // Store Serial ID

  const btnclick = async () => {
    const updatedCandidates = [];
    const updatedOptions = [];

    // Loop through 8 input and select elements to capture the values on button click
    for (let i = 0; i < 8; i++) {
      const candidateValue = document.getElementById(`candidate${i + 1}`).value;
      const optionValue = document.getElementById(`opt${i + 1}`).value;

      updatedCandidates.push(candidateValue);
      updatedOptions.push(optionValue);
    }

    // Update the state only when "Submit" is clicked
    setCandidates(updatedCandidates);
    setOptions(updatedOptions);
    
    alert(`Candidate Names: ${updatedCandidates.join(', ')}\nOptions: ${updatedOptions.join(', ')}`);
    alert(`${updatedOptions.join(',')}`);
    

    var summa  = updatedOptions.map(option => parseInt(option));
    console.log(updatedOptions);
    console.log(summa);

    // Make API call to your Express server
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
        defaultValue={candidates[index]}  // Display initial value after the first submission
        required
      />
      <select
        id={`opt${index + 1}`}
        className='option'
        defaultValue={options[index]}  // Display initial option after the first submission
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
            <h1>Config</h1>
            <input
              type="text"
              placeholder="Enter Your Serial ID"
              value={serialID}  // Bind Serial ID state
              onChange={(e) => setSerialID(e.target.value)}  // Update state on input change
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
