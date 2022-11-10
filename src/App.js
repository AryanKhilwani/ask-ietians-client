import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import { Container } from '@mui/material';
import Postpage from './components/Postpage';
import SignUp from './components/SignUp';
import { useContext, useEffect } from 'react';

import { getAuth,  } from "firebase/auth";
import PostState from './context/post/postState';

import './Firebase/firebase';
import ReplyState from './context/reply/replyState';
import TagState from './context/tag/tagState';
import UserContext from './context/user/userContext';
import CreatePost from './components/CreatePost';
import Home from './components/Home';
// eslint-disable-next-line 
const auth = getAuth();


function App() {
  return (
    <>
      <PostState>
        <ReplyState>
          <TagState>


            <Navbar />
            <Container maxWidth="lg">
              <Routes>
                <Route exact path='/signin' element={<SignIn />} />

                <Route exact path='/createpost' element={<CreatePost/>} />
                <Route exact path='/signup' element={<SignUp />} />
                <Route exact path='/dashboard' element={<Dashboard />} />
                <Route exact path="/post/:id" element={<Postpage />}/>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/logout' element={<Logout />} />
              </Routes>
            </Container>

          </TagState>
        </ReplyState>
      </PostState>
    </>
  );
}
const Logout = () => {
const context = useContext(UserContext)
const {logout} = context
  const Navigate = useNavigate()
  
  
  useEffect(() => {
    logout()
    // TODO: clear x-auth-token
    Navigate('/dashboard')
    // eslint-disable-next-line
  }, [])


}
export default App;
