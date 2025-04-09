import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Login from "./pages/Auth/Login"
import Signup from "./pages/Auth/Signup"
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from './pages/Profile/Profile';


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Signup></Signup>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
      </Routes>  
    </>
 
  );
}

export default App;
