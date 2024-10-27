import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashbord';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Define routes for your application */}
          <Route path="/Signin" element={<Signin />} />  {/* Default route for SignIn */}
          <Route path="/signup" element={<SignUp />} />  {/* Route for SignUp */}
          <Route path="/" element={<Home />} />  {/* Route for Home */}
          <Route path="/Dashboard" element={<Dashboard />} />  {/* Route for dashbord */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
