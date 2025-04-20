import axios from "../service/axios.js"
import { setCache, getCache, clearCache } from "../service/redis.js"
import { handleError } from '../functions/formatError.js'
const baseId = process.env.AIRTABLE_BASE_ID
const table = process.env.AIRTABLE_TABLE_NAME


export const listAirtable = async (req, res) => {
  try {
    const response = await axios.get(`${baseId}/${table}`)
    return res.status(response.data.status).json({payload: response.data})
    
  } catch (error) {
    console.error(error.response?.data || error.message);
    return res.status(error.response?.status || 500).json({
      message: error.response?.data?.error?.message || "Erro desconhecido",
    })
  }
}
