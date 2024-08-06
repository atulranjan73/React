import React, { useState } from 'react';

const App = () => {
  // Initialize state with default name
  const [name, setName] = useState("");

  // Function to handle input change
  // const handleChange = (event) => {
  //   setName(event.target.value); // Update state with the input value
  // };

  return (
    <div>
      <div className="nameupdate">
        <h1>{name}</h1>
        <input 
          type="text" 
          placeholder="Enter your name" 
          // value={name} 
          onChange={(e)=>setName(e.target.value)} 
        />
      </div>
    </div>
  );
};

export default App;
