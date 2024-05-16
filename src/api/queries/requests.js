import { API_ENDPOINTS } from "../../utils/config/constants";
import defaultAPI from "../axios";

export const getIncomeRequests = async () => {
    const { data } = await defaultAPI.get(API_ENDPOINTS.REQUESTS.INCOME_REQUESTS);
    return data;
};
export const getOutcomeRequests = async () => {
    const { data } = await defaultAPI.get(API_ENDPOINTS.REQUESTS.OUTCOME_REQUESTS);
    return data;
};
export const getOneRequests = async (id) => {
    const { data } = await defaultAPI.get(`${API_ENDPOINTS.REQUESTS}/${id}`);
    return data;
};
export const MakeRequest = async (formData) => {
    const { data } = await defaultAPI.post(API_ENDPOINTS.REQUESTS.REQUEST, formData);
    return data;
};
export const AcceptRequest = async (id) => {
    const { data } = await defaultAPI.post(`${API_ENDPOINTS.REQUESTS}/${id}${API_ENDPOINTS.REQUESTS.ACCEPT_REQUEST}`);
    return data;
};
export const RejectRequest = async (id) => {
    const { data } = await defaultAPI.post(`${API_ENDPOINTS.REQUESTS}/${id}${API_ENDPOINTS.REQUESTS.REJECT_REQUEST}`);
    return data;
};
export const CancelRequest = async (id) => {
    const { data } = await defaultAPI.post(`${API_ENDPOINTS.REQUESTS}/${id}${API_ENDPOINTS.REQUESTS.CANCEL_REQUEST}`);
    return data;
};
  