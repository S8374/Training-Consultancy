import { useQuery , useMutation, useQueryClient} from '@tanstack/react-query';
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


export const useAddService = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newService) => axios.post(`${import.meta.env.VITE_LIVE_LINK}/services`, newService),
    onSuccess: () => {
      queryClient.invalidateQueries(['services']);
    },
  });
};

export const useUpdateService = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...updatedService }) => 
      axios.put(`${import.meta.env.VITE_LIVE_LINK}/services/${id}`, updatedService),
    onSuccess: () => {
      queryClient.invalidateQueries(['services']);
    },
  });
};

export const useDeleteService = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => axios.delete(`${import.meta.env.VITE_LIVE_LINK}/services/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(['services']);
    },
  });
};


