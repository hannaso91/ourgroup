import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import MemberCard from './components/MemberCard'

function App() {
  

  return (
    <>
      <Layout>
        <Routes>
          <Route path='member/:slugmember' element={<MemberCard />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
