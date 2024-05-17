import { API_ENDPOINTS } from '../../utils/config/constants';
import defaultAPI from '../axios';
export const getMyProducts = async () => {
    const { data } = await defaultAPI.get(API_ENDPOINTS.MY_PRODUCTS.BASE);
    return data;
  };
  export const showMyProduct = async (id) => {
    const { data } = await defaultAPI.get(`${API_ENDPOINTS.MY_PRODUCTS.BASE}/${id}`);
    return data;
  };
  export const addProduct = async (formData) => {
    const { data } = await defaultAPI.post(`${API_ENDPOINTS.MY_PRODUCTS.BASE}`, formData);
    return data;
  };
  export const updateProduct = async ({formData, id}) => {
    const { data } = await defaultAPI.post(`${API_ENDPOINTS.MY_PRODUCTS.BASE}/${id}`, formData);
    return data;
  };
  export const deleteProduct = async (id) => {
    const { data } = await defaultAPI.delete(`${API_ENDPOINTS.MY_PRODUCTS.BASE}/${id}`, formData);
    return data;
  };