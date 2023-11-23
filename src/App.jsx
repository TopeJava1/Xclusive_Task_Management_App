import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login_Signup/Login'
import Signup from './pages/Login_Signup/Signup'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>} />
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
