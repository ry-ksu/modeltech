import React from 'react';
import { useAppSelector } from 'hook';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export const Table = () => {
  const tableData = useAppSelector((state) => state.tableData);

  return (
    <DataTable value={tableData.data} responsiveLayout="scroll">
      <Column field="date" header="Дата" sortable></Column>
      <Column field="oilProduction" header="Добыча нефти, т/сут" sortable></Column>
      <Column field="liquidProduction" header="Добыча жидкости, м3/сут" sortable></Column>
    </DataTable>
  );
};
