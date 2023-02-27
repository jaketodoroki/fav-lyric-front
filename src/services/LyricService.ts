// services
import * as tokenService from './tokenService'

// types
import { Lyric } from '../types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/lyrics`

async function getAllLyrics(): Promise<Lyric[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Lyric[]
  } catch (error) {
    throw error
  }
}



export { getAllLyrics }
