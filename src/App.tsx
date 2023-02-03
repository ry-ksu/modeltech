import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hook';
import { fetchData } from 'store/data-slice';

function App() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(data);

  return (
    <div>
      <h1>Hello, world</h1>
    </div>
  );
}

export default App;
