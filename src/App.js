import Cards from './components/Cards/Cards';
import { useState } from 'react';
import { ThanksCard } from './components/ThankYouCard/ThanksCard';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(false)
  const [items, setItems] = useState(null)

  function ToggleChange(){
    setToggle(!toggle)
  }
  

  return (
    <div className="App">
      
      {!toggle && <Cards items={items}toggle={toggle} ToggleChange={ToggleChange} setToggle={setToggle} setItems={setItems} />}
      {toggle &&<ThanksCard toggle={toggle} setToggle={setToggle} items={items} setItems={setItems}/>}
      
    </div>
  );
}


export default App;
