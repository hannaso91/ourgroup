import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import MemberCard from './components/MemberCard'
import Home from './components/Home'
import MemberLayout from './components/MemberLayout'


function App() {
  

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='member/:slugmember' element={<MemberLayout />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
