import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import MemberLayout from './components/MemberLayout'
import Home from './components/Home'
import { fetchMembersByCard } from './sanity/memberServices'
import { useEffect, useState } from 'react'
import { getAllLogs } from './sanity/logg'

function App() {
  
  const [members, setMembers] = useState([])
  const [logg, setLogg] = useState([])
  


  const memberCard = async() => {
    const data = await fetchMembersByCard()
    setMembers(data)
  }

  const loggTask = async() => {
    const data = await getAllLogs()
    setLogg(data)

  }

  

  useEffect(() => {
    memberCard(),
    loggTask()
  }, [])

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home members={members} logg={logg}/>} />
          <Route path='member/:slugmember' element={<MemberLayout />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
