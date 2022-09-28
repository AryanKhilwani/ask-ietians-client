import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import { Container } from '@mui/material';

function App() {
  return (
    <>
        <Navbar />
        <Container maxWidth="lg">
          <Routes>
            <Route exact path='/signin' element={<SignIn/>} />
            <Route exact path='/dashboard' element={<Dashboard/>} />
            
            <Route exact path='/' element={<Dashboard/>} />
            <Route exact path='/logout' element={<Logout />} />
          </Routes>
        </Container>
    </>
  );
}
const Logout = () => {

  
}
export default App;
