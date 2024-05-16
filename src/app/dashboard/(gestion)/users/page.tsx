"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { token } from '../../../actions/get-token';
import DataTable, { TableColumn } from 'react-data-table-component';
import toast, { Toaster } from 'react-hot-toast';

interface User {
  id: number;
  email: string;
  is_enable: boolean;
}

function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {

    try {
      const response = await axios.get('http://localhost:3001/users', {
        withCredentials: true
      });

      if (!response.data) {
        throw new Error('Failed to fetch users');
      }

      setUsers(response.data);

      toast.success("Users retrieved successfully");
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleEnableChange = async (id: number, newValue: boolean) => {

    try {
      const response = await axios.patch(`http://localhost:3001/users/approve/${id}`, {
        is_enable: newValue
      }, {
        withCredentials: true
      });

      if (!response.data) {
        throw new Error('Failed to update user');
      }

      await fetchUsers();

    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async (id: number) => {

    try {
      const response = await axios.delete(`http://localhost:3001/users/${id}`, {
        withCredentials: true
      });

      if (!response.data) {
        throw new Error('Failed to delete user');
      }

      await fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const columns: TableColumn<User>[] = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Enabled",
      selector: (row) => row.is_enable,
      sortable: true,
      cell: (row) => <input type="checkbox" checked={row.is_enable} onChange={e => handleEnableChange(row.id, e.target.checked)} />
    },
    {
      name: "Delete",
      cell: (row) => <button onClick={() => deleteUser(row.id)}>Delete</button>,
    },
  ];

  return (
    <>
      <Toaster />
      <DataTable
        columns={columns}
        data={users}
        pagination
        highlightOnHover
        responsive
        selectableRowsHighlight
        selectableRows
        title="List of Users"
      />
    </>
  );
}

export default UsersPage;

