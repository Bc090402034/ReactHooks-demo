import { useState, useEffect } from 'react';
import MyContext from './context';
import MyComponent from './components/mycomponent';
import HideShowComponent from './components/togelcomponent';
import OddComponent, {EvenComponent} from './components/MyComponentList';
import UserTracker from './components/UserTracker';
import SignupForm from './components/SignupForm';
import UserList2 ,{UserList} from './components/ApiComonent';
import './App.css'

function App() {
  const [stateValue,setValue] = useState ("Hello World");
  const [ShowComponent, SetShowComponent] = useState(false);
  const [number, setNumber] = useState(0);
  const [isEven, setIsEven]= useState(true);

  useEffect(() => {
    if (number%2 ===0)
    {
      setIsEven(true);
    }else{
      setIsEven(false);
    }
  },[number])

  return (
    <>
    <MyContext.Provider value={stateValue}>
      <div>
        <h2>This is use Context Example</h2>
      <MyComponent  />
      </div>
      
    </MyContext.Provider>
    <button onClick={() => SetShowComponent(!ShowComponent)}>
      Show Component
    </button>
    {ShowComponent && <HideShowComponent />}


    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Number: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>Increase</button>

      <div style={{ marginTop: '20px' }}>
        {isEven ? <EvenComponent /> : <OddComponent />}
      </div>
    </div>
    <UserTracker />

    <br /><br />
    <SignupForm  />
    <br /><br />
    <UserList />

    <br /><br />
    <UserList2 />



    </>
  )
}

export default App
