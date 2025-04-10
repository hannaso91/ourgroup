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
  
  // Lagrer det som hentes fra Sanity inn i egne states slik at jeg kan bruke det som hentes ut.


  // Denne funksjonen lagrer det som hentes fra sanity inn i statene over, det samme gjelder loggTask funksjonen
  const memberCard = async() => {
    const data = await fetchMembersByCard()
    setMembers(data)
  }

  const loggTask = async() => {
    const data = await getAllLogs()
    setLogg(data)

  }

  
  // Legger inn at funksjonene over skal kjøres når sidene mountes eller det skjer endringer
  // Kunne lagt inn at dette skal skje hver gang det skjer endringer i member eller logg?
  useEffect(() => {
    memberCard(),
    loggTask()
  }, [])

  return (
    <>
    {/*Layout blir rendret rundt alt annet, slik at vi har med det på hver eneste side som blir mountet.
    Rutene går til hjemskjermen og det benyttes slug for å hente ut det en ønsker med komponentet MemberLayout*/}
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
