import React, { useEffect } from 'react';
import { useAppDispatch } from 'hook';
import { fetchData } from 'store/data-slice';
import { Table } from 'components/table';
import { Header } from 'components/header';

import style from './style.module.css';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <div className={style.header}>
        <div className={style.wrapper}>
          <Header />
        </div>
      </div>
      <div className={style.main}>
        <div className={style.wrapper}>
          <Table />
        </div>
      </div>
    </>
  );
}

export default App;
