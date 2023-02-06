import React from 'react';
import style from './index.module.css';
import { Card } from 'primereact/card';

export const ErrorBlock = ({ text }: { text: string }) => {
  return (
    <Card className={style.error} title="Ошибка">
      <p>{text}</p>
    </Card>
  );
};
