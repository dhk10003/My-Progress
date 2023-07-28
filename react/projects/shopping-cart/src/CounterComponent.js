import React, { useState, useEffect } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  // useEffect with a single dependency (count)
  useEffect(() => {
    console.log('Count value changed:', count);

    // This effect will run whenever the 'count' state changes
    // Do any side effect or additional logic based on the count value here

    // For demonstration purposes, we will update the document title with the count value
    document.title = `Count: ${count}`;

    // This returned function is used for cleanup when the component unmounts or when 'count' changes again
    return () => {
      console.log('Component unmounted or count changed again');
    };
  }, [count]);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default CounterComponent;