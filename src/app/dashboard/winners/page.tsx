"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import toast, { Toaster } from 'react-hot-toast';
import * as XLSX from "xlsx"; 
import moment from "moment"

interface Winner {
  id: number;
  full_name: string;
  image_path: string;
  created_time:Date;
  phone: string;
  address: string;
}

function WinnersPage() {
  const [winners, setWinners] = useState<Winner[]>([]);  
  const [selectedRows, setSelectedRows] = useState<Winner[]>([]);  

  const handleExport = () => {
    const wb = XLSX.utils.book_new(),
    ws = XLSX.utils.json_to_sheet(selectedRows);
    XLSX.utils.book_append_sheet(wb, ws, `${moment().format("LL")}`);
    XLSX.writeFile(wb, `${moment().format("LL")}.xlsx`);
  }

  useEffect(() => {
    fetchsWinner();
  }, []);

  const fetchsWinner = async () => {
    

    
    try {
      const response = await axios.get('http://localhost:3001/winners')

      console.log(response.data)
      if (!response.data) {
        throw new Error('Une erreur est survenue lors de la récupération des winners');
      }

      setWinners(response.data);
      setSelectedRows(response.data)

      toast.success("Winners récupérés")

    } catch (error) {
      console.error('Une erreur est survenue lors de la récupération des Winner: ', error);
    }
  };



  const columns: TableColumn<Winner>[] = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Nom complet",
      selector: (row) => row.full_name,
      sortable: true,
    },
    {
      name: "Numéro de téléphone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Adresse",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Date d'inscription",
      selector: (row) => row.created_time.toLocaleString(),
      sortable: true,
    },
    {
      name: "Image",
      selector: (row) => row.image_path,
      cell: (row) => <img className='h-40 w-40 p-2' src={row.image_path} alt={row.full_name} />
    },
  ]

  return (
    <>
    <Toaster />
    <DataTable
			columns={columns}
			data={winners}
      pagination
      highlightOnHover
      responsive
      title="Liste des winners"
      selectableRows
      onSelectedRowsChange={({ selectedRows }) => setSelectedRows(selectedRows)}
      actions={
        <button onClick={handleExport} className='relative z-10'>
         Exporter la séléction
        </button>
      }
    />
    </>
  );
}

export default WinnersPage;