import './App.css';
import Signin from './signin-form/Signin';
import Signup from './signup-form/Signup';
import Home from './home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
