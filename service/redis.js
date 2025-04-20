import redis from 'async-redis'
const REDIS = process.env.REDIS

// config
const client = redis.createClient({url: REDIS}) 
const expirationTime = 5400; //second - 1 hora e meia
const get = async (key) => await client.get(key)
const clear = async (key) => await client.del(key)

async function set(key, data, expire) {
    await client.setex(key, expirationTime, data);
}

export async function setCache(clientId, data, expire) {
    const key = clientId;
    if (expire === undefined) expire = expirationTime;
    return await set(key, data, expire)
}

export async function getCache(clientId) {
    const key = clientId;
    let data = await get(key);
    if (typeof (data) !== 'string') return data = JSON.parse(data)
    return data
}

export async function clearCache(clientId) {
    const key = clientId
    return await clear(key)
}
