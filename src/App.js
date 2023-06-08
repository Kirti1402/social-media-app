import './App.css';
import HomePage from './Component/HomePage/HomePage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer />
          <HomePage/>
    </div>
  );
}

export default App;
