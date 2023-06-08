import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './Component/LoginPage/LoginPage';
import {Routes,Route,Link} from "react-router-dom"
import HomePage from './Component/HomePage/HomePage';
import LandingPage from './Component/HomePage/LandingPage';

function App() {
  return (
    <div className="App">
      <ToastContainer />
          <Routes>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/home' element={<HomePage />}/>
            <Route path='/landing' element={<LandingPage />}/>
          </Routes>
    </div>
  );
}

export default App;
