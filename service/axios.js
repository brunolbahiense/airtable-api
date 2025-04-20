import axios from 'axios'
const token = process.env.AIRTABLE_API_KEY

const instance = axios.create({
  baseURL: 'https://api.airtable.com/v0',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});



export default instance