import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Coins from './components/Coins/Coins';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/contact' element={<Contacts></Contacts>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
