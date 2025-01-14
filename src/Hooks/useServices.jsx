import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const UseServices = () => {
  const fetchServices = async () => {
    const { data } = await axios.get('https://training-consultancy-server.vercel.app/services');
    return data;
  };

  return useQuery({
    queryKey: ['services'],
    queryFn: fetchServices,
  });
};
