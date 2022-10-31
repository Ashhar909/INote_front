import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './components/About';
// import Alert from './components/Alert';
import EditNote from './components/EditNote';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ViewNote from './components/ViewNote';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className='container'>
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/:id" element={<EditNote />} />
      <Route exact path="/view/:id" element={<ViewNote />} />
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
