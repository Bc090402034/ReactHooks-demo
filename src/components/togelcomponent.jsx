// ChildComponent.jsx
import { useEffect } from 'react';

function HideShowComponent() {
  useEffect(() => {
    console.log("Hide and Show component is mounted");
  }, []);

  return <h2>I am the child</h2>;
}

export default HideShowComponent;
