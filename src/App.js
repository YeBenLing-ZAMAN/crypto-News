import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Coins from './components/Coins/Coins';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import CoinDetails from './components/CoinDetails/CoinDetails';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/coin-details/:id' element={<CoinDetails></CoinDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
