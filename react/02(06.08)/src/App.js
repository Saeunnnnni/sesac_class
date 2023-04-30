
import './App.css';
import Header from './components/Header/Header';
import MainFeed from './components/MainFeed/MainFeed';

function App() {
  return (
    <div className="App">
      <Header />  {/*  컴포넌트는 컴포넌트 네임이 태그가 되니까 바로 부르면 됨  */}
      <MainFeed />
    </div>
  );
}

export default App;
