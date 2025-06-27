import { useState, useEffect } from 'react';

function UserTracker() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  // useEffect runs when either `name` or `age` changes
  useEffect(() => {
    console.log(`User updated → Name: ${name}, Age: ${age}`);
  }, [name, age]); // 👈 depends on both variables

  // Separate input handlers
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAgeChange(e) {
    setAge(e.target.value);
  }

  return (
    <div style={{ padding: '20px', border: '1px solid gray', borderRadius: '8px' }}>
      <h2>User Tracker</h2>

      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />

      <br /><br />

      <input
        type="number"
        value={age}
        onChange={handleAgeChange}
        placeholder="Enter your age"
      />

      <p>Name: {name} | Age: {age}</p>
    </div>
  );
}

export default UserTracker;
