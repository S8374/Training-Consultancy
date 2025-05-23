import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function useApply() {
  const {
    data: Applied, // Renaming the data response
    isLoading: loading, // Correctly renaming the loading state
    refetch,
    isError, // Optional: If you want to handle errors
    error, // Optional: Access the error object
  } = useQuery({
    queryKey: ["apply"],
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_LIVE_LINK}/apply`);
      return response.data; // Return the parsed data directly
    },
    retry: 3, // Retry fetching data 3 times
    retryDelay: (attemptNumber) => Math.pow(2, attemptNumber) * 1000, // Exponential backoff
    onError: (error) => {
      console.error("Error fetching apply data:", error);
    },
  });

  return [Applied, refetch, loading];
}