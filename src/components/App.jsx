import { useState, useEffect } from "react";
const App = () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log(`Clicks changed - ${clicks}`);
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
};

export default App;
