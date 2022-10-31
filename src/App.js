import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import EditNote from './components/EditNote';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ViewNote from './components/ViewNote';
import Alert from './components/Alert'
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  return (
    <BrowserRouter>
    <Navbar showAlert = {showAlert}/>
    <Alert alert = {alert}/>
    <div className='container'>
    <Routes>
      <Route exact path="/home" element={<Home showAlert = {showAlert}/>} />
      <Route exact path="/:id" element={<EditNote showAlert = {showAlert}/>} />
      <Route exact path="/view/:id" element={<ViewNote />} />
      <Route exact path="/" element={<Login showAlert = {showAlert}/>} />
      <Route exact path="/signup" element={<Signup showAlert = {showAlert}/>} />
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
