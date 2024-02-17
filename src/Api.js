// api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:9090';

export const fetchBalanceInLocaleCurrency = (userId, targetCurrency) => {
    return axios.get(`${API_BASE_URL}/CreditBalance/balance/${userId}?targetCurrency=${targetCurrency}`);
};

// Add more API functions as needed
