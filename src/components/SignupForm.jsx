import { useState } from 'react';

function SignupForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [aboutMe, setAboutMe] = useState('');

  // check which checkbox  is checked or not also which changes
  function handleHobbyChange(e) {
    const { value, checked } = e.target;
    if (checked) {
      setHobbies(prev => [...prev, value]);
    } else {
      setHobbies(prev => prev.filter(hobby => hobby !== value));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      fullName,
      email,
      password,
      gender,
      hobbies,
      aboutMe,
    };
    console.log('Submitted Data:', formData);
    alert("Form submitted! Check console.");
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>Signup Form (Multiple useState)</h2>

      <label>Full Name:</label><br />
      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} /><br /><br />

      <label>Email:</label><br />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />

      <label>Password:</label><br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />

      <label>Gender:</label><br />
      <label><input type="radio" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} /> Male</label>
      <label><input type="radio" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} /> Female</label><br /><br />

      <label>Hobbies:</label><br />
      <label><input type="checkbox" value="Cricket" checked={hobbies.includes('Cricket')} onChange={handleHobbyChange} /> Cricket</label>
      <label><input type="checkbox" value="Hockey" checked={hobbies.includes('Hockey')} onChange={handleHobbyChange} /> Hockey</label>
      <label><input type="checkbox" value="Football" checked={hobbies.includes('Football')} onChange={handleHobbyChange} /> Football</label><br /><br />

      <label>About Me:</label><br />
      <textarea value={aboutMe} onChange={(e) => setAboutMe(e.target.value)} rows="4" cols="40" /><br /><br />

      <button type="submit">Submit</button>

      <hr />
      <h3>Live Data:</h3>
      <pre>{JSON.stringify({ fullName, email, password, gender, hobbies, aboutMe }, null, 2)}</pre>
    </form>
  );
}

export default SignupForm;
