```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    let cleanup = () => {
      console.log('Component unmounted');
    };
    if (mounted) {
      console.log('Mounted');
      cleanup = () => {
        console.log('Component unmounted');
        // Perform necessary cleanup actions here
      };
    }
    return cleanup;
  }, [mounted]);
  useEffect(() => {
    //Simulate some lifecycle event that leads to unmount
    const timeoutID = setTimeout(() => setMounted(false), 10000);
    return () => clearTimeout(timeoutID);
  }, []);

  return (
    <div>
      {mounted && <p>You clicked {count} times</p>}
      {mounted && <button onClick={() => setCount(count + 1)}>Click me</button>}
    </div>
  );
}

export default MyComponent;
```