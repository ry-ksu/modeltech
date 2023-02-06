import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hook';
import { fetchData } from 'store/data-slice';
import { Table } from 'components/table';
import { Header } from 'components/header';
import { ErrorBlock } from 'components/error-block';

import style from './style.module.css';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const tableData = useAppSelector((state) => state.tableData);
  let content: JSX.Element = <></>;

  useEffect(() => {
    dispatch(fetchData());

    console.log(
      'С вероятностью 30% генерируется ошибка. ',
      'Необходимо перезагрузить страницу несколько раз, ',
      'чтобы увидеть 2 состояния системы: ',
      'с окном ошибки и с корректными данными.'
    );
  }, [dispatch]);

  if (tableData.isLoaded == 'LOADED') {
    content = <Table />;
  }
  if (tableData.isLoaded == 'REJECTED') {
    content = <ErrorBlock text={tableData.error} />;
  }

  return (
    <>
      <div className={style.header}>
        <div className={style.wrapper}>
          <Header />
        </div>
      </div>
      <div className={style.main}>
        <div className={style.wrapper}>{content}</div>
      </div>
    </>
  );
}

export default App;
