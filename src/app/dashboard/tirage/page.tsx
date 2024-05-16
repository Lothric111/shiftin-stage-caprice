"use client"
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

// Définition de l'interface pour un participant
interface Participant {
    id: number;
    full_name: string;
    phone: string;
    address: string;
    image_path?: string;
    created_time: Date;
    is_accepted: boolean;
}

interface Winner extends Omit<Participant, 'is_accepted'> {}

export default function Tirage() {
    const [count, setCount] = useState('');
    const [winners, setWinners] = useState<Winner[]>([]);
    const [error, setError] = useState('');

    const getWinners  = async () => {        

        try {
            // Assurez-vous que l'adresse correspond à celle de votre serveur NestJS
            const response = await axios.get(`http://localhost:3001/winners`, {
                params: {
                    limit: count
                }
            });

            setWinners(response.data);
        } catch (err) {
            setError('Une erreur est survenue lors du tirage au sort.');
            console.error(err);
        }
    };


    const handleDraw = async () => {        

        try {
            // Assurez-vous que l'adresse correspond à celle de votre serveur NestJS
            await axios.get(`http://localhost:3001/participants/tirage`, {
                withCredentials: true,
                params: {
                    count
                }
            });

            getWinners()
            setError('');

        } catch (err) {
            setError('Une erreur est survenue lors du tirage au sort.');
            console.error(err);
        }
    };

  
    return (
        <div className='h-auto min-h-screen bg-cover text-center relative flex items-center py-5 px-0 bg-[url("/assets/slider-bg.jpg")]'>
           <div className='w-[1092px] mx-auto relative flex flex-col gap-2.5'>
           <div className='mx-auto block'>
            <Image 
            src="/assets/logo-caprice.png"
            alt='Logo Caprice'
            width={150}
            height={85}
            />
           </div>

           <div className='mx-auto'>
           <Image 
            src="/assets/slogan.svg"
            alt='Slogan'
            width={316}
            height={85}
            />
           </div>


           <div className='mx-auto'>
           <Image 
            src="/assets/gift.png"
            alt='Slogan'
            width={342}
            height={240}
            />
           </div>


            <h1>Tirage au Sort</h1>
            <input
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                placeholder="Nombre de gagnants"
            />

            <button onClick={handleDraw}>Effectuer le tirage</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {winners.length > 0 && (
                <div>
                    <h2>Gagnants</h2>
                    <ul>
                        {winners.map((winner) => (
                            <li key={winner.id}>{winner.full_name} (ID: {winner.id})</li>
                        ))}
                    </ul>
                </div>
            )}

            </div>
        </div>
    );
}
