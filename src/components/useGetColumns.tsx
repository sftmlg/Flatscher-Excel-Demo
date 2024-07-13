import React from 'react';
import { Button, Popconfirm, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { Customer } from '@src/data/excelData';
export const useGetColumns = (
  handleSave: (row: Customer) => void,
  handleDelete: (key: number) => void,
  editingKey: number | null,
  edit: (record: Customer) => void,
): ColumnsType<Customer> => {
  const columns: ColumnsType<Customer> = [
    {
      title: 'Anrainer ID',
      dataIndex: 'anrainerID',
      key: 'anrainerID',
      editable: false,
    },
    {
      title: 'Objekt KG Nummer',
      dataIndex: 'ObjKGnr',
      key: 'ObjKGnr',
      editable: true,
    },
    {
      title: 'Objekt KG Ort',
      dataIndex: 'ObjKGort',
      key: 'ObjKGort',
      editable: true,
    },
    {
      title: 'Objekt Einlagezahl',
      dataIndex: 'ObjEZl',
      key: 'ObjEZl',
      editable: true,
    },
    {
      title: 'Objekt Grundstücksnummer',
      dataIndex: 'ObjGStNr',
      key: 'ObjGStNr',
      editable: true,
    },
    {
      title: 'Objekt Grundstücksfläche (m2)',
      dataIndex: 'ObjGStM2',
      key: 'ObjGStM2',
      editable: true,
    },
    {
      title: 'KP Titel',
      dataIndex: 'KPTitel',
      key: 'KPTitel',
      editable: true,
    },
    {
      title: 'KP Anrede',
      dataIndex: 'KPAnrede',
      key: 'KPAnrede',
      editable: true,
    },
    {
      title: 'KP Vorname',
      dataIndex: 'KPVorname',
      key: 'KPVorname',
      editable: true,
    },
    {
      title: 'KP Nachname',
      dataIndex: 'KPNachname',
      key: 'KPNachname',
      editable: true,
    },
    {
      title: 'KP Briefanrede',
      dataIndex: 'KPBriefanrede',
      key: 'KPBriefanrede',
      editable: true,
    },
    {
      title: 'KP Straße',
      dataIndex: 'KPStrasse',
      key: 'KPStrasse',
      editable: true,
    },
    {
      title: 'KP KFZ',
      dataIndex: 'KPKfz',
      key: 'KPKfz',
      editable: true,
    },
    {
      title: 'KP PLZ',
      dataIndex: 'KPplz',
      key: 'KPplz',
      editable: true,
    },
    {
      title: 'KP Ort',
      dataIndex: 'KPort',
      key: 'KPort',
      editable: true,
    },
    {
      title: 'KP Anmerkung',
      dataIndex: 'KPAnmerkung',
      key: 'KPAnmerkung',
      editable: true,
    },
    {
      title: 'KP Geburtsdatum',
      dataIndex: 'KPGebDat',
      key: 'KPGebDat',
      editable: true,
    },
    {
      title: 'KP Personal ID',
      dataIndex: 'KPPersID',
      key: 'KPPersID',
      editable: true,
    },
    {
      title: 'KP Änderungsdatum',
      dataIndex: 'KPAenderungsDatum',
      key: 'KPAenderungsDatum',
      editable: true,
    },
    {
      title: 'KP Erstanlage Datum',
      dataIndex: 'KPErstanlageDatum',
      key: 'KPErstanlageDatum',
      editable: true,
    },
    {
      title: 'KP Letztes Datum',
      dataIndex: 'KPLetztDatum',
      key: 'KPLetztDatum',
      editable: true,
    },
    {
      title: 'KP Quelle',
      dataIndex: 'KPQuelle',
      key: 'KPQuelle',
      editable: true,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record: Customer) => {
        return (
          <span>
            <Typography.Link disabled={editingKey !== null} onClick={() => edit(record)}>
              Edit
            </Typography.Link>
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.anrainerID)}>
              <Button icon={<DeleteOutlined />} type="link" />
            </Popconfirm>
          </span>
        );
      },
    },
  ].map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: any) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
        className: 'custom-table-cell',
      }),
    };
  });

  return columns;
};
