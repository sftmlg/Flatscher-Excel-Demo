import React from 'react';
import { Table, Form } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Customer } from '@src/data/excelData';
import { EditableRow } from './EditableRow';
import { EditableCell } from './EditableCell';

interface EditableTableProps {
  dataSource: Customer[];
  setEditingKey: (key: number | null) => void;
  columns: ColumnsType<Customer>;
}

export const EditableTable: React.FC<EditableTableProps> = ({
  dataSource,
  setEditingKey,
  columns,
}) => {
  return (
    <Form component={false}>
      <Table<Customer>
        components={{
          body: {
            row: EditableRow,
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={dataSource}
        columns={columns}
        rowClassName="editable-row"
        pagination={{
          onChange: () => setEditingKey(null),
        }}
      />
    </Form>
  );
};
