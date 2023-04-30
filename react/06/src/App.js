import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CardList from './components/CardList';
import Notice from './components/Notice';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Menual, Rule, EtcInfo, Policy } from './pages/FooterMenu';


function App() {
  const title = 'site';
  return (
    <div className="App">
      <BrowserRouter>

        <Header title={title} />

        <Routes>

          <Route path='/' element={<Main />} /> {/* -> 최상위 경로로 메인을 불러줌 */}
          <Route path='/cardList' element={<CardList />} />
          <Route path='/notice' element={<Notice />} />

          {/* footermenu 불러주기 */}
          <Route path='/menual' element={<Menual />} />
          <Route path='/rule' element={<Rule />} />
          <Route path='/etcInfo' element={<EtcInfo />} />
          <Route path='/policy' element={<Policy />} />


        </Routes>

        <Footer title={title} />

      </BrowserRouter>
    </div>
  );
}

export default App;
/* npm i react-router-dom  */