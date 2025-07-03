import React, { useEffect, useState } from 'react';

export function UserList() {
  const [users, setUsers] = useState([]);      // to store API result
  const [loading, setLoading] = useState(true); // to show loading status
  const [error, setError] = useState(null);     // to show any error

  // This will run once when the component loads
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        return response.json(); // convert to JS object
      })
      .then((data) => {
        setUsers(data);     // store the result
        setLoading(false);  // stop loading
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty [] means only run once when component loads

  // JSX to show on screen
  return (
    <div>
      <h2>User List</h2>

      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
       {!loading && !error && (
      <table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
        <thead>
         <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {users.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
        ))}
        </tbody>
      </table>
       )}
    </div>
  );
}


export default function UserList2() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      // Wait for JSON to be parsed
      const data = await response.json();

      setUsers(data); 
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}