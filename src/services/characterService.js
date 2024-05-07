import axios from "axios";

const BASE_URL = " https://dragonball-api.com/api"
const ID_URL = "https://dragonball-api.com/api/characters/"


const getCharacters = async (nombre, page) => axios.get (`${BASE_URL}/characters?page=${page}&limit=10&name=${nombre}`)
const getCharacterId = async (id) => axios.get(`${ID_URL}${id}`);

export {getCharacters,getCharacterId}

