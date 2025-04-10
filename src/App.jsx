import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import MemberLayout from './components/MemberLayout'
import Home from './components/Home'
import { fetchMembersByCard } from './sanity/memberServices'
import { useEffect, useState } from 'react'
import { getAllLogs } from './sanity/logg'
import './styles/darkmode.scss';

// fikk tilbakemelding i oblig 2 om at dark mode ble hvit i teksten og umulig å lese, det kunne jo ikke skje igjen så vi søkte rundt for å løse det
// Fant da denne siden her https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme og brukte denne for å løse dette.
// Husket også fra webutvikling at det ble nevnt important, søkte derfor på google og fant denne https://www.w3schools.com/css/css_important.asp
// De to tilsammen løste dette problemet og teksten i dark mode blir nå svart

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
