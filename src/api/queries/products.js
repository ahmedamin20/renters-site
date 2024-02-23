import { API_ENDPOINTS } from '../../utils/config/constants';
import defaultAPI from '../axios';
export const getAllProducts = async () => {
    const { data } = await defaultAPI.get(API_ENDPOINTS.PRODUCTS);
    return data;
  };