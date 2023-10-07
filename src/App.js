import './App.css';
import Content from './content.js/content';
import { useState, useCallback } from "react"

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const handleCount = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, []);

  return (
    <div className="App">
      <h2>{count}</h2>
      <br />
      <button onClick={() => setShow(!show)}>Toggle Content</button>
      {show && <Content handleCount={handleCount} />}
    </div>
  );
}

export default App;
