"use client"
import React, { useEffect, useState } from 'react';

interface Participant {
  id: number;
  full_name: string;
  image_path: string;
  phone: string;
  address: string;
  is_accepted: boolean;
  winner: boolean;
}

function ParticipantsPage() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [editingParticipantId, setEditingParticipantId] = useState<number | null>(null);
  const [newFullName, setNewFullName] = useState<string>('');
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    fetchParticipants();
  }, []);

  const fetchParticipants = async () => {
    try {
      const response = await fetch('http://localhost:3001/participants');
      if (!response.ok) {
        throw new Error('Failed to fetch participants');
      }
      const data = await response.json();
      setParticipants(data);
    } catch (error) {
      console.error('Error fetching participants:', error);
    }
  };

  const handleAcceptanceChange = (id: number, newValue: boolean) => {
    setParticipants(prevParticipants =>
      prevParticipants.map(participant =>
        participant.id === id ? { ...participant, is_accepted: newValue } : participant
      )
    );
  };

  const handleUpdateFullName = (id: number) => {
    const participantToUpdate = participants.find(participant => participant.id === id);
    if (!participantToUpdate) {
      console.error('Participant not found');
      return;
    }

    // Effectuer la mise à jour locale du nom complet du participant
    setParticipants(prevParticipants =>
      prevParticipants.map(participant =>
        participant.id === id ? { ...participant, full_name: newFullName } : participant
      )
    );
    setEditingParticipantId(null); // Terminer le mode édition
    setNewFullName(''); // Réinitialiser le champ de saisie après la mise à jour
    setShowMessage(true); // Afficher le message de confirmation
    setTimeout(() => setShowMessage(false), 3000); // Masquer le message après 3 secondes
  };

 const handleDeleteParticipant = async (id: number) => {
  try {
    // Effectuer une requête DELETE vers le backend pour supprimer le participant
    const response = await fetch(`http://localhost:3001/participants/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete participant');
    }

    // Mettre à jour l'état local en supprimant le participant supprimé
    setParticipants(prevParticipants =>
      prevParticipants.filter(participant => participant.id !== id)
    );

    console.log('Participant deleted successfully');
  } catch (error) {
    console.error('Error deleting participant:', error);
  }
};

  const handleSort = (property: string) => {
    if (sortBy === property) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(property);
      setSortDirection('asc');
    }
  };

  const sortedParticipants = participants.slice().sort((a, b) => {
    let aValue: string | number | boolean = '';
    let bValue: string | number | boolean = '';
  
    // Vérifier si sortBy correspond à une propriété valide de Participant
    if (sortBy in a && sortBy in b) {
      // Utiliser la propriété correspondante de Participant pour trier
      aValue = a[sortBy as keyof Participant];
      bValue = b[sortBy as keyof Participant];
    } else {
      console.error(`sortBy ${sortBy} is not a valid property of Participant`);
      return 0;
    }
  
    if (aValue === bValue) return 0;
    return sortDirection === 'asc' ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
  });

  const handleSaveChanges = async () => {
    if (editingParticipantId === null) return; // Ne rien faire si aucun participant n'est en cours de modification

    try {
      // Effectuer une requête PATCH vers le backend pour mettre à jour le participant
      const response = await fetch(`http://localhost:3001/participants/${editingParticipantId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ full_name: newFullName }), // Envoyer le nouveau nom complet
      });

      if (!response.ok) {
        throw new Error('Failed to update participant');
      }

      console.log('Participant updated successfully');
      fetchParticipants(); // Actualiser la liste des participants
      setShowMessage(true); // Afficher le message de confirmation
      setTimeout(() => setShowMessage(false), 3000); // Masquer le message après 3 secondes
    } catch (error) {
      console.error('Error updating participant:', error);
    }
  };

  const renderSortButton = (column: string) => {
    if (sortBy === column) {
      return sortDirection === 'asc' ? '▲' : '▼';
    }
    return '';
  };

  return (
    <>
      {showMessage && <div style={{ color: 'green' }} className=''>Modifications enregistrées avec succès !</div>}
      <button onClick={handleSaveChanges} className='text-red-100 bg-yellow-400 font-extrabold text-center p-2 rounded-lg ml-20'>Enregistrer</button>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg bg-red-100'>
        <table className='w-full text-sm text-left rtl:text-right'>
          <thead>
            <tr className='border-b-2 border-red-400'>
              <th scope="col" className="px-6 py-3 text-yellow-400" onClick={() => handleSort('id')}>
                ID {renderSortButton('id')}
              </th>
              <th scope="col" className="px-6 py-3 text-yellow-400" onClick={() => handleSort('full_name')}>
                Nom complet {renderSortButton('full_name')}
              </th>
              <th scope="col" className="px-6 py-3 text-yellow-400" onClick={() => handleSort('phone')}>
                Numéro de télèphone {renderSortButton('phone')}
              </th>
              <th scope="col" className="px-6 py-3 text-yellow-400" onClick={() => handleSort('address')}>
                Adresse {renderSortButton('address')}
              </th>
              <th scope="col" className="px-6 py-3 text-yellow-400">Image</th>
              <th scope="col" className="px-6 py-3 text-yellow-400">Accepté</th>
              <th scope="col" className="px-6 py-3 text-yellow-400">Modifier</th>
              <th scope="col" className="px-6 py-3 text-yellow-400">Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {sortedParticipants.map(participant => (
              <tr key={participant.id} className='hover:bg-red-800  border-b-2 border-red-400'>
                <td scope="row" className="px-6 py-4 text-yellow-400">{participant.id}</td>
                <td scope="row" className="px-6 py-4 text-yellow-400">
                  {editingParticipantId === participant.id ? (
                    <input className='text-black'
                      type="text"
                      value={newFullName}
                      onChange={e => setNewFullName(e.target.value)}
                      placeholder="Nouveau nom"
                    />
                  ) : (
                    participant.full_name
                  )}
                </td>
                <td scope="row" className="px-6 py-4 text-yellow-400">{participant.phone}</td>
                <td scope="row" className="px-6 py-4 text-yellow-400">{participant.address}</td>              
                <td scope="row" className="px-6 py-4 text-yellow-400 "><img src={participant.image_path} alt={participant.full_name} /></td>
                <td scope="row" className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={participant.is_accepted}
                    onChange={e => handleAcceptanceChange(participant.id, e.target.checked)}
                  />
                </td>
                <td scope="row" className="px-6 py-4 text-yellow-400" >
                  <button onClick={() => setEditingParticipantId(participant.id)}>Modifier</button>
                </td>
                <td scope="row" className="px-6 py-4 text-yellow-400">
                  <button onClick={() => handleDeleteParticipant(participant.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ParticipantsPage;
