// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import AddLyric from './components/AddLyric/AddLyric'
import LyricList from './components/Lyrics/LyricList'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as lyricService from './services/LyricService'

// stylesheets
import './App.css'

// types
import { User, Profile, Lyric } from './types/models'

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())

  const [profiles, setProfiles] = useState<Profile[]>([])

  const [lyrics, setLyrics] = useState<Lyric[]>([])

  useEffect((): void => {
    const fetchLyrics = async (): Promise<void> => {
    try {
      const lyricsData: Lyric[] = await lyricService.getAllLyrics()
      setLyrics(lyricsData)
    } catch (error) {
      console.log(error)
    }
    }
    if (user) fetchLyrics()
    
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    user ? fetchProfiles() : setProfiles([])
  }, [user])

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  const handleAddLyric = async (lyricData:object):Promise<void> => {
    const newLyric = await lyricService.create(lyricData)
    setLyrics([newLyric, ...lyrics])
    navigate('/lyrics')
  }

  const handleDeleteLyric = async (lyric:string) => {
    const deletedLyric = await lyricService.deleteLyric(lyric)
    const updatedLyrics = await lyricService.getAllLyrics()
    setLyrics(updatedLyrics)
    navigate(`/lyrics`)
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route 
          path="/lyric"
          element={<AddLyric handleAddLyric={handleAddLyric}/>}
        />
        <Route 
          path='/lyrics'
          element={<LyricList lyrics={lyrics} user={user} handleDeleteLyric={handleDeleteLyric}/>}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles 
                profiles={profiles}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
