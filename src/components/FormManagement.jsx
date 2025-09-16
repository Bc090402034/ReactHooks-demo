import React, { useState } from "react";

function MyForm() {
  // Form fields
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [country, setCountry] = useState("");

  // List of all submissions
  const [submissions, setSubmissions] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setHobbies((prev) =>
      prev.includes(value) ? prev.filter((h) => h !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build one entry
    const entry = {
      id: Date.now(), // simple unique key
      name,
      age,
      gender,
      hobbies: [...hobbies],
      country,
    };

    // Append to the bottom of the list
    setSubmissions((prev) => [...prev, entry]);

    // Reset the form
    setName("");
    setAge("");
    setGender("");
    setHobbies([]);
    setCountry("");
  };

  return (
    <div style={{ maxWidth: 520 }}>
      <form onSubmit={handleSubmit}>
        <h2>React Form Example</h2>

        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            min="0"
          />
        </label>
        <br />

        <fieldset style={{ border: "none", padding: 0 }}>
          <legend>Gender:</legend>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
              required
            />{" "}
            Male
          </label>{" "}
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
              required
            />{" "}
            Female
          </label>
        </fieldset>

        <fieldset style={{ border: "none", padding: 0 }}>
          <legend>Hobbies:</legend>
          <label>
            <input
              type="checkbox"
              value="Reading"
              checked={hobbies.includes("Reading")}
              onChange={handleCheckboxChange}
            />{" "}
            Reading
          </label>{" "}
          <label>
            <input
              type="checkbox"
              value="Sports"
              checked={hobbies.includes("Sports")}
              onChange={handleCheckboxChange}
            />{" "}
            Sports
          </label>{" "}
          <label>
            <input
              type="checkbox"
              value="Traveling"
              checked={hobbies.includes("Traveling")}
              onChange={handleCheckboxChange}
            />{" "}
            Traveling
          </label>
        </fieldset>

        <label>
          Country:
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">--Choose--</option>
            <option value="Pakistan">Pakistan</option>
            <option value="China">China</option>
            <option value="UAE">UAE</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>

      {/* List of submissions (new entries get added after existing ones) */}
      {submissions.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <h3>Submitted Entries</h3>
          {submissions.map((s, idx) => (
            <div
              key={s.id}
              style={{
                marginBottom: 12,
                padding: 10,
                border: "1px solid #ccc",
                borderRadius: 6,
                display:"flex",
              }}
            >
              <strong>#{idx + 1}</strong>
              <p><b>Name:</b> {s.name}</p>
              <p><b>Age:</b> {s.age}</p>
              <p><b>Gender:</b> {s.gender}</p>
              <p><b>Hobbies:</b> {s.hobbies.join(", ") || "—"}</p>
              <p><b>Country:</b> {s.country}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyForm;
