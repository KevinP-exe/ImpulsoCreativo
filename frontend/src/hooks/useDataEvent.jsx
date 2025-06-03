import { useState, useEffect} from "react";
import { toast } from "react-hot-toast";
import { url } from "../utils/apiUrl";
import { useNavigate, useParams } from "react-router-dom";
import useFetchEvent from "./useFetchEvent";

const useDataEvent = (methods) => {
 
  const { id } = useParams(); 
  const navigate = useNavigate(); 
 
  const { getEvents, getEventsById } = useFetchEvent(); 
 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;
 
  const saveEventForm = async (dataForm) => {
    try{
        alert("en form")
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      if (!response.ok) {
        toast.error("Failed to add user");
        throw new Error("Failed to add user");
      }
      toast.success("User saved successfully");
    } catch (error) {
      console.error("Error saving user:", error);
      toast.error("Error al guardar el usuario");
    }
    finally {
      getEvents(); 
      reset(); 
    }
  }
 
      const handleEventAction = (dataForm) => {
        if (id) {
      editEvent(dataForm);
    }else {
      saveEventForm(dataForm);
    }
  };
 
  const editEvent = async (dataForm) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      if (!response.ok) {
        toast.error("Failed to update user");
        throw new Error("Failed to update user");
      }
      toast.success("User updated successfully");
      navigate("/home"); 
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Failed to update user");
    } finally {
      reset(); 
      getEvents(); 
    }
  };
 

  const loadEvent = async () => {
    if (id) {
      const event = await getEventsById(id);
      if (event) {
        reset({
          evento: event?.evento,
          direccion: event?.direccion,
          tipoEvento: event?.tipoEvento,
          descripcion: event?.descripcion,
        });
      }
    }
  };
 
    
  useEffect(() => {
    loadEvent();
  }, [id]); 
 
 
 
  return { saveEventForm, register,
    handleSubmit: handleSubmit(handleEventAction),
     errors, loadEvent
    };
};


export default useDataEvent