import React, { useContext, useRef, useState, useEffect } from 'react';
import { Button, Form, Input, Popconfirm, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { InputRef } from 'antd';

type FormInstance<T> = ReturnType<typeof Form.useForm>[0];

export const EditableContext = React.createContext<FormInstance<any> | null>(null);

export const EditableRow: React.FC<any> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
