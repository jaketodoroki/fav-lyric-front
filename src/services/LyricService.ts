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

const create =async (lyricData:object) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(lyricData) 
    })
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

const deleteLyric = async (name:string) => {
  try {
    const res = await fetch(`${BASE_URL}/${name}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      }
    })
    return res.json()
  } catch (error) {
    console.log(error);
  }  
}

export {
  getAllLyrics,
  create,
  deleteLyric,
 }
