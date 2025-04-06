import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import MemberLayout from './components/MemberLayout'

import Home from './components/Home'
import MembersCard from './components/MembersCard'
import { fetchMembersByCard } from './sanity/memberServices'
import { useEffect, useState } from 'react'

function App() {
  
  const [members, setMembers] = useState([])


  const memberCard = async() => {
    const data = await fetchMembersByCard()
    setMembers(data)
  }


  useEffect(() => {
    memberCard()
  }, [])

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home members={members}/>} />
          <Route path='member/:slugmember' element={<MemberLayout />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
