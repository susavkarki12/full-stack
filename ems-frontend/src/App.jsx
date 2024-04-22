import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            <Route path='/' element={<ListEmployeeComponent/>}></Route>
            <Route path='/posts' element={<ListEmployeeComponent/>}></Route>
            <Route path='/add-posts' element={<EmployeeComponent/>}></Route>
          </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
