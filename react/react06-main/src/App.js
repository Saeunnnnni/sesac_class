import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CardList from './components/CardList';
import Notice from './components/Notice';
import Event from './components/Event';
import EventToggle from './components/EventToggle';
import Form from './components/Form';

import { Manual, Rule, Policy, EtcInfo } from './pages/FooterMenu'
import { BrowserRouter, Route,switch (key) {
  case value:
    
    break;

  default:
    break;
}}

function App() {
  const title = 'site'; 
  return (
    <div className='App'>
      <BrowserRouter>
        <Header title={title} />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/cardList' element={<CardList />} />
            <Route path='/notice' element={<Notice />} />
            <Route path='/manual' element={<Manual />} />
            <Route path='/rule' element={<Rule />} />
            <Route path='/policy' element={<Policy />} />
          <Route path='/etcInfo' element={<EtcInfo />} />
          <Route path='/event' element={<Event />} />
          <Route path='/eventToggel' element={<EventToggle />} />
          <Route path='/Form' element={<Form />} />
      
          </Routes>
        <Footer title={title} />
      </BrowserRouter>
    </div>
  );
}

export default App;
/* npm i react-router-dom  */