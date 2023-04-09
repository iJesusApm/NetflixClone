import axios from 'axios'
import {API_KEY, BASE_URL} from '../environment/contants'

export const getMovies = async (type: string, qty = 8) => {
  const response = await axios.get(
    `${BASE_URL}list-titles/?apiKey=${API_KEY}&regions=US&platforms=Netflix&services=subscription&genres=${type}&sort_by=popularity&embed=images&limit=${qty}`
  )
  return response.data
}

export const getUniqueMovie = async (movieID: string) => {
  const response = await axios.get(`${BASE_URL}title/${movieID}/details/?apiKey=${API_KEY}&append_to_response=sources`)
  return response.data
}
