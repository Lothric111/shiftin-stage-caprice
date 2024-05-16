"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { token } from '../../../actions/get-token';
import DataTable, { TableColumn } from 'react-data-table-component';
import toast, { Toaster } from 'react-hot-toast';
import { CallToaster } from '@/utils/call-toaster';

interface Participant {
  id: number;
  full_name: string;
  image_path: string;
  created_time:Date;
  phone: string;
  address: string;
  is_accepted: boolean;
  winner: boolean;
}

function ParticipantsPage() {
  const [participants, setParticipants] = useState<Participant[]>([]);  

  useEffect(() => {
    fetchParticipants();
  }, []);


  const fetchParticipants = async () => {

    try {
      const response = await axios.get('http://localhost:3001/participants', {
        withCredentials: true        
      });

      if (!response.data) {
        throw new Error('Une erreur est survenue lors de la récupération des participants');
      }

      setParticipants(response.data);

      toast.success("Utilisateurs récupérés")

    } catch (error) {
      console.error('Une erreur est survenue lors de la récupération des participants: ', error);
    }
  };

  const handleAcceptanceChange = async (id: number, newValue: boolean) => {

    const res = await axios.patch(`http://localhost:3001/participants/${id}`, { is_accepted: newValue }, {
      withCredentials: true        
    })

      if (!res.data) {
        throw new Error('Une erreur est survenue lors de la modification du participant');
      }

      await fetchParticipants();
  };

 const handleDeleteParticipant = async (id: number) => {

  try {
    const response = await axios.delete(`http://localhost:3001/participants/${id}`, {
      withCredentials: true
    }) 

    if (!response.data) {
      throw new Error('Une erreur est survenue lors de la suppression du participant');
    }

    await fetchParticipants()

  } catch (error) {
    console.error('Une erreur est survenue lors de la suppression du participant: ', error);
  }
};


  const handleSaveChanges = async (id: number, value: string) => {

    try {
      const response = await axios.patch(`http://localhost:3001/participants/${id}`, { full_name: value }, {
        withCredentials: true
      })
  
      if (!response.data) {
        throw new Error('Une erreur est survenue lors de la modification du participant');
      }
  
      await fetchParticipants();

    } catch (error) {
      console.error('Une erreur est survenue lors de la modification du participant: ', error);
    }
  };


  const columns: TableColumn<Participant>[] = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Nom complet",
      selector: (row) => row.full_name,
      sortable: true,
      cell: (row) => <input type="text" defaultValue={row.full_name} onBlur={(e) => handleSaveChanges(row.id, e.target.value)} placeholder="Nouveau nom" contentEditable />
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
    {
      name: "Accepté",
      selector: (row) => row.is_accepted,
      sortable: true,
      cell: (row) => <input type="checkbox" checked={row.is_accepted} onChange={e => handleAcceptanceChange(row.id, e.target.checked)} />
    },
    {
      name: "Supprimer",
      cell: (row) => <button onClick={() => handleDeleteParticipant(row.id)}>Supprimer</button>,
    },
  ]

  return (
    <>
    <Toaster />
    <DataTable
			columns={columns}
			data={participants}
      pagination
      highlightOnHover
      responsive
      selectableRowsHighlight
      selectableRows
      title="Liste des participants"
    />
    </>
  );
}

export default ParticipantsPage;