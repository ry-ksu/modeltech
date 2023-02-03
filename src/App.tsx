import React from 'react';

function App() {
  fetch('/data')
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div>
      <h1>Hello, world</h1>
    </div>
  );
}

export default App;
