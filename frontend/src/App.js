
import './App.css';
import Login from './login';
import Register  from './signup';
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Register/>}></Route>
          <Route path='/home/:id' element={<Home/>}></Route>

        </Routes>
         
    </BrowserRouter>
  
   
  );
}

export default App;
