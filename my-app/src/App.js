

// import React, { useState } from 'react';
// import './App.css';  // Make sure to import the CSS file

// function App() {
//   const [inputData, setInputData] = useState({
//     Name: '',
//     Location: '',
//     Fuel_Type: '',
//     Transmission: '',
//     Owner_Type: '',
//     Mileage: '',
//     Engine: '',
//     Power: '',
//     Year: '',
//     Kilometers_Driven: '',
//     Seats: ''
//   });
//   const [response, setResponse] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputData({
//       ...inputData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('/home', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(inputData)
//       });
//       if (res.ok) {
//         const data = await res.json();
//         setResponse(data);
//         alert('Data submitted successfully!');
//       } else {
//         alert('Error: ' + res.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error submitting data');
//     }
//   };

//   return (
//     <div className="App">
//       <h1 className="App-header">Submit Car Details</h1>
//       <form onSubmit={handleSubmit} className="form-container">
//         {Object.keys(inputData).map((key) => (
//           <div key={key} className="form-group">
//             <label className="form-label">
//               {key}:
//               <input
//                 type="text"
//                 name={key}
//                 value={inputData[key]}
//                 onChange={handleChange}
//                 className="form-input"
//               />
//             </label>
//             <br />
//           </div>
//         ))}
//         <button type="submit" className="submit-button">Submit</button>
//       </form>
//       {response && (
//         <div className="response-container">
//           <h2>Response from Server:</h2>
//           <pre>{JSON.stringify(response, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';  // Make sure to import the CSS file

function App() {
  const [inputData, setInputData] = useState({
    Name: '',
    Location: '',
    Fuel_Type: '',
    Transmission: '',
    Owner_Type: '',
    Mileage: '',
    Engine: '',
    Power: '',
    Year: '',
    Kilometers_Driven: '',
    Seats: ''
  });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputData)
      });
      if (res.ok) {
        const data = await res.json();
        setResponse(data);
        alert('Data submitted successfully!');
      } else {
        alert('Error: ' + res.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting data');
    }
  };

  return (
    <div className="App">
      <h1 className="App-header">Submit Car Details</h1>
      <form onSubmit={handleSubmit} className="form-container">
        {Object.keys(inputData).map((key) => (
          <div key={key} className="form-group">
            <label className="form-label">
              {key}:
              <input
                type="text"
                name={key}
                value={inputData[key]}
                onChange={handleChange}
                className="form-input"
              />
            </label>
            <br />
          </div>
        ))}
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {response && (
        <div className="response-container">
          <h2>Response from Server:</h2>
          <pre className="response-json">{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
