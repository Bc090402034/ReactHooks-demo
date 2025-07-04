import { Link } from 'react-router';

export default function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <h2>My Website</h2>
      <nav style={{padding:'8px', margin:'5px', border:'1px solid black'}}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
