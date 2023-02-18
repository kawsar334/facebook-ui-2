import './App.css';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import {Routes, Route} from "react-router-dom";
import Profile from './pages/profile/Profile';
function App() {
  return (
    <Routes >
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/profile/:id' element={<Profile />} />

    </Routes>
  );
}

export default App;
