import { useContext } from 'react';
import MyContext from '../context';

function MyComponent() {
    // This will receive the value from context
    const contextValue = useContext(MyContext);

    return <h1>{contextValue}</h1>;
}

export default MyComponent;
