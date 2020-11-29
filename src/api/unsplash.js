import axios from 'axios';

export default axios.create({
    baseURL: `https://api.unsplash.com`,
    headers: {
        Authorization: 'Client-ID fVigU4KtgVMszy3a0YCjLeV7pP53gsGmdyHC1wCtfgY'
    }
})