import React, { useState, useEffect } from 'react';
import Spinner from '../component/spinner'; // Assuming Spinner component exists
import { MdErrorOutline } from "react-icons/md";

const AgeCal = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAge, setShowAge] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // State for error message

  const calculateAge = () => {
    setLoading(true);
    setErrorMessage(null); // Clear any previous error messages

    setTimeout(() => {
      const birthDate = new Date(birthdate);

      // Validate for future dates:
      if (birthDate >= new Date()) {
        setErrorMessage('Please enter a birthdate in the past.');
        setLoading(false);
        return; // Exit function if future date is entered
      }

      const difference = Date.now() - birthDate.getTime();
      const ageDate = new Date(difference);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

      setLoading(false);
      setAge(calculatedAge);
      setShowAge(true);
    }, 1000); // Simulate a loading delay of 1 second
  };

  useEffect(() => {
    setShowAge(false); // Hide age result when birthdate changes
  }, [birthdate]);

  return (
    <div className="age-calculator">
      {loading && <Spinner />}
      <h1 className="title1">
        <strong>Calculate Your</strong>
      </h1>
      <div className="container">
        <p className="text">Age</p>
      </div>

      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />

      <button onClick={calculateAge}>
        <strong>Calculate Age</strong>
      </button>

      {showAge && age !== null && !loading && (
        <div className="age-result">
          <h2>Your age is:</h2>
          <div className="age-value">{age}</div>
        </div>
      )}

      {errorMessage && (
        <div className="error-message">{errorMessage}<MdErrorOutline /></div>
      )}
    </div>
  );
};

export default AgeCal;


