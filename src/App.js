import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import Home from './Component/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SingUp from './Component/SingUp';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <BrowserRouter >
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/singup" element={<SingUp />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
