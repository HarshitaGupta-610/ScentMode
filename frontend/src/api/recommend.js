import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const fetchRecommendations = async (payload) => {
  const res = await axios.post(`${BASE_URL}/api/recommend`, payload);
  return res.data;
};
