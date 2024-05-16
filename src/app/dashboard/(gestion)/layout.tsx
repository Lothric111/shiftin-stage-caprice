
"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type User={
  id:number,
  email:string,
}|null

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {

    const [user,setUser]=useState<User>(null)
    const [isLoading,setIsLoading]=useState<boolean>(true)

    const getUser = async () => {

      try {
        const response = await axios.get('http://localhost:3001/users/me', {
            withCredentials: true        
        });
  
        if (!response.data) {
          throw new Error('Failed to fetch user');
        }
  
        setUser(response.data);
        setIsLoading(false)
  
        toast.success("user recuperes")
  
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

useEffect(()=>{
  getUser()

},[])
    

    return (
      <section>
       
        <nav>{isLoading ? "Chargement..." : `Connecté en tant que ${user?.email}`}</nav>
   
        {children}
      </section>
    )
  }