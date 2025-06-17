
// import LandingScreen from '.././src/components/LandingScreen.jsx';
// import LoginScreen from '.././src/components/LoginScreen';
// import Profile from '.././src/components/Profile.jsx';
// import SignUp from '.././src/components/Signup';
import LandingScreen from './components/LandingScreen';
import LoginScreen from './components/LoginScreen';
import Profile from './components/Profile';
import Signup from './components/Signup';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className='mx-auto h-screen w-[375px] shadow-lg p-2 bg-gray-50 border border-gray-200 flex flex-col items-center max-[375px]:w-full'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<LandingScreen/>}/>
          <Route path='/login' element={<LoginScreen/>}/>
          <Route path = '/account' element={<Profile/>}/>
          <Route path = '/sign-up' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;