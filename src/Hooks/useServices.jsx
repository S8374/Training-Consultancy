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
  });
};

//https://training-consultancy-server.vercel.app/services