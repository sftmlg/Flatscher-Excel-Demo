import React, { useState } from 'react';
import { Button, theme } from 'antd';
import { EditableTable } from './EditableTable';
import { Customer, excelCustomerData } from '@src/data/excelData';
import { useGetColumns } from './useGetColumns';
import { ColumnsType } from 'antd/es/table';

export const ExcelTableProcess: React.FC = () => {
  const { token } = theme.useToken();

  const [dataSource, setDataSource] = useState<Customer[]>(excelCustomerData);
  const [editingKey, setEditingKey] = useState<number | null>(null);

  const handleDelete = (anrainerID: number) => {
    const newData = dataSource.filter(item => item.anrainerID !== anrainerID);
    setDataSource(newData);
  };

  const handleSave = (row: Customer) => {
    const newData = [...dataSource];
    const index = newData.findIndex(item => row.anrainerID === item.anrainerID);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setDataSource(newData);
    setEditingKey(null);
  };

  const edit = (record: Customer) => {
    setEditingKey(record.anrainerID);
  };

  const columns: ColumnsType<Customer> = useGetColumns(handleSave, handleDelete, editingKey, edit);

  const handleAdd = () => {
    const newData: Customer = {
      anrainerID: dataSource[dataSource.length - 1].anrainerID + 1,
      ObjKGnr: 0,
      ObjKGort: 'empty',
      ObjEZl: 0,
      ObjGStNr: 'empty',
      ObjGStM2: 0,
      KPSperrvermerk: 'empty',
      KPTitel: 'empty',
      KPAnrede: 'empty',
      KPVorname: 'empty',
      KPNachname: 'empty',
      KPBriefanrede: 'empty',
      KPStrasse: 'empty',
      KPKfz: 'empty',
      KPplz: 0,
      KPort: 'empty',
      KPAnmerkung: 'empty',
      KPGebDat: 'empty',
      KPPersID: 0,
      KPAenderungsDatum: 'empty',
      KPErstanlageDatum: 'empty',
      KPLetztDatum: 'empty',
      KPQuelle: 'empty',
    };
    setDataSource([...dataSource, newData]);
    setEditingKey(newData.anrainerID);
  };

  return (
    <div className="rounded-lg border border-dashed p-5 md:p-12">
      <div
        className="mb-4 overflow-auto"
        style={{
          color: token.colorTextTertiary,
          backgroundColor: token.colorFillAlter,
          borderColor: token.colorBorder,
        }}>
        <EditableTable dataSource={dataSource} columns={columns} setEditingKey={setEditingKey} />
      </div>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}>
        Add a row
      </Button>
    </div>
  );
};
