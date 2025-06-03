import { url } from "../utils/apiUrl";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
 
const useEventActions = (getEvents) => {
  const navigate = useNavigate();
 
  const deleteEvent = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      toast.success("Event deleted successfully");
      console.log("Event deleted:", response);
      getEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Failed to delete event");
    } finally {
      getEvents();
    }
  };
 
  const handleUpdateEvent = (id) => {
    navigate(`/events/${id}`);
  };
 
  return {
    deleteEvent,
    handleUpdateEvent,
  };
};
 
export default useEventActions;