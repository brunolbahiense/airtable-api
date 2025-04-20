import { getCache } from "../service/redis.js"

export const authMiddleware = async (req, res, next) => {
    const { doc } = req.body
    const auth = await getCache(`${doc}:auth`)
    if (!auth) return res.status(401).json({ status: false, message: 'Token expirado 🟡' })   
    next()
}

