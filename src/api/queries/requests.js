import { API_ENDPOINTS } from "../../utils/config/constants";
import defaultAPI from "../axios";

export const getIncomeRequests = async () => {
    const { data } = await defaultAPI.get(API_ENDPOINTS.REQUESTS.INCOME_REQUESTS);
    return data;
};
export const getOutcomeRequest = async () => {
    const { data } = await defaultAPI.get(API_ENDPOINTS.REQUESTS.OUTCOME_REQUESTS);
    return data;
};
export const getOneRequests = async (id) => {
    const { data } = await defaultAPI.get(`${API_ENDPOINTS.REQUESTS.REQUEST}/${id}`);
    return data;
};
export const MakeRequest = async (formData) => {
    const { data } = await defaultAPI.post(API_ENDPOINTS.REQUESTS.REQUEST, formData);
    return data;
};
export const AcceptRequest = async (id) => {
    console.log(id)
    const { data } = await defaultAPI.post(`${API_ENDPOINTS.REQUESTS.REQUEST}/${id}${API_ENDPOINTS.REQUESTS.ACCEPT_REQUEST}`);
    return data;
};
export const RejectRequest = async (id) => {
    const { data } = await defaultAPI.post(`${API_ENDPOINTS.REQUESTS.REQUEST}/${id}${API_ENDPOINTS.REQUESTS.REJECT_REQUEST}`);
    return data;
};
export const CancelRequest = async (id) => {
    const { data } = await defaultAPI.post(`${API_ENDPOINTS.REQUESTS.REQUEST}/${id}${API_ENDPOINTS.REQUESTS.CANCEL_REQUEST}`);
    return data;
};
  
export const showRequest = async (id) => {
    const { data } = await defaultAPI.get(`${API_ENDPOINTS.REQUESTS.REQUEST}/${id}`);
    console.log(id)
    return data;
};
  