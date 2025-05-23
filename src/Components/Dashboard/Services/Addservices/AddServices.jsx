import React, { useState } from 'react';

import { useAddService, useDeleteService, UseServices, useUpdateService } from '../../../../Hooks/useServices';

export default function AddServices() {
  const { data: services, isLoading, error } = UseServices();
  const addServiceMutation = useAddService();
  const updateServiceMutation = useUpdateService();
  const deleteServiceMutation = useDeleteService();

  const [formData, setFormData] = useState({
    title: '',
    img: '',
    description: '',
    facility: [{ name: '', details: '' }]
  });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFacilityChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFacilities = [...formData.facility];
    updatedFacilities[index] = { ...updatedFacilities[index], [name]: value };
    setFormData(prev => ({ ...prev, facility: updatedFacilities }));
  };

  const addFacilityField = () => {
    setFormData(prev => ({
      ...prev,
      facility: [...prev.facility, { name: '', details: '' }]
    }));
  };

  const removeFacilityField = (index) => {
    const updatedFacilities = formData.facility.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, facility: updatedFacilities }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateServiceMutation.mutateAsync({ id: editingId, ...formData });
        setEditingId(null);
      } else {
        await addServiceMutation.mutateAsync(formData);
      }
      setFormData({
        title: '',
        img: '',
        description: '',
        facility: [{ name: '', details: '' }]
      });
    } catch (error) {
      console.error('Error submitting service:', error);
    }
  };

  const handleEdit = (service) => {
    setEditingId(service._id);
    setFormData({
      title: service.title,
      img: service.img,
      description: service.description,
      facility: service.facility
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await deleteServiceMutation.mutateAsync(id);
      } catch (error) {
        console.error('Error deleting service:', error);
      }
    }
  };

  if (isLoading) return <div className="text-center py-8">Loading services...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error loading services</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Services Management</h1>
      
      {/* Add/Edit Service Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? 'Edit Service' : 'Add New Service'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input
              type="url"
              name="img"
              value={formData.img}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Facilities</label>
            {formData.facility.map((facility, index) => (
              <div key={index} className="flex space-x-4 mb-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Facility Name"
                  value={facility.name}
                  onChange={(e) => handleFacilityChange(index, e)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  name="details"
                  placeholder="Facility Details"
                  value={facility.details}
                  onChange={(e) => handleFacilityChange(index, e)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {formData.facility.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeFacilityField(index)}
                    className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addFacilityField}
              className="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Add Another Facility
            </button>
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {editingId ? 'Update Service' : 'Add Service'}
          </button>
          
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setFormData({
                  title: '',
                  img: '',
                  description: '',
                  facility: [{ name: '', details: '' }]
                });
              }}
              className="w-full py-2 px-4 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel Edit
            </button>
          )}
        </form>
      </div>
      
      {/* Services List */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">All Services</h2>
        {services?.length === 0 ? (
          <p className="text-gray-500">No services found. Add one above.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services?.map((service) => (
              <div key={service._id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.facility.map((facility, index) => (
                      <div key={index} className="bg-gray-50 p-2 rounded">
                        <h4 className="font-medium text-blue-600">{facility.name}</h4>
                        <p className="text-sm text-gray-600">{facility.details}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(service)}
                      className="flex-1 py-1 px-3 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="flex-1 py-1 px-3 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}