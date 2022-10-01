import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import { Container } from '@mui/material';
import Postpage from './components/Postpage';
import SignUp from './components/SignUp';
import { useEffect } from 'react';

import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();


function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Routes>
          <Route exact path='/signin' element={<SignIn />} />
          
          <Route exact path='/signup' element={<SignUp/>} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route
            path="/post/:id"
            element={
              <Postpage />}
          />
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/logout' element={<Logout />} />
        </Routes>
      </Container>
    </>
  );
}
const Logout = () => {
  
  const Navigate = useNavigate()
useEffect(() => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('logged out')
    Navigate('/dashboard')
  }).catch((error) => {
    // An error happened.
  });
// eslint-disable-next-line
}, [])


}
export default App;
