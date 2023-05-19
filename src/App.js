import logo from './logo.svg';
import './App.css';
import Cart from './component/Cart';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shoping from './component/Shoping';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
        <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Cart/>} />
        <Route path="/shopping" element={<Shoping/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
