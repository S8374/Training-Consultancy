import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const UseServices = () => {
  const fetchServices = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_LIVE_LINK}/services`);
    return data;
  };

  return useQuery({
    queryKey: ['services'],
    queryFn: fetchServices,
    retry: false, // Prevent infinite retries during debugging
    onError: (error) => console.error('Error fetching services:', error),
  });
  
};


