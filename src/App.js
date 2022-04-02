import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Coins from './components/Coins/Coins';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import CoinDetails from './components/CoinDetails/CoinDetails';
import BdAddress from './components/Contacts/BdAddress';
import UkAddress from './components/Contacts/UkAddress';
import NotFond from './components/NotFond/NotFond';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/coin-details/:id' element={<CoinDetails></CoinDetails>}></Route>
        <Route path='/contact' element={<Contacts></Contacts>}>
          <Route path='bd-address' element={<BdAddress></BdAddress>}></Route>
          <Route path='uk-address' element={<UkAddress></UkAddress>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="*" element={<NotFond></NotFond>}></Route> 
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
