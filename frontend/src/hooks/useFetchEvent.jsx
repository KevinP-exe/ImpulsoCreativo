import { useState, useEffect } from 'react';
import { url } from '../utils/apiUrl';
import {toast} from 'react-hot-toast';
 
const useFetchEvent =()=>{
 
    const [dataEvent, setDataEvent] = useState([]);
 
    const getEvents = async () => {
        try {
           const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setDataEvent(data);
            toast.success("Eventos obtenidos correctamente");
           
        } catch (error) {
            console.error("Error fetching events:", error);
            toast.error("Error al obtener los eventos");
        }
    }
 
  const getEventsById = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      if (!response.ok) {
        console.log("Failed to fetch events");
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching events:", error);
      console.log("Failed to fetch events");
      return null;
    }
  };
 
    
    useEffect(() => {
      getEvents();
    }, []); 
 

    return {
        dataEvent,
        setDataEvent,
        getEvents,
        getEventsById
    }
 
}
export default useFetchEvent;