import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/index.jsx'
import Layout from './components/Layout/index.jsx'
import Queratocono from './components/Queratocono/index.jsx'
import Dummy from './components/Dummy/index.jsx'
function App() {

  return (
    <Routes>
     <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/queratocono' element={<Queratocono />} />
      <Route path='/queratoglobo' element={<Dummy />} />
      <Route path='/ectasia-post-lasik' element={<Dummy />} />
      <Route path='/ectasia-post-qr' element={<Dummy />} />
      <Route path='/ectasia-post-qpp' element={<Dummy />} />
     </Route>
    </Routes>
  )
}

export default App
