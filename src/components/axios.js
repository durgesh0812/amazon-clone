import axios from 'axios';

const instance =axios.create({
    baseURL:'http://localhost:5001/ecommerce-store-298d0/us-central1/api'
});

export default instance;