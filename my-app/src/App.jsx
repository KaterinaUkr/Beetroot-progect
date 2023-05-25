import logo from './logo.svg';
import './App.scss';

// import Title from './components/Title/Title';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

const element = (textToShow) => <div>{textToShow}</div>

function App() {
  
  return (
    <>
      <Header></Header>
    <main className="main">
    <Footer></Footer>
    </main>   
    </>
  );
}

export default App;
