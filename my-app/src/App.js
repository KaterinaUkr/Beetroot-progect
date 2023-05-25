import './App.scss';

import { Header } from './components/Header/Header'
import {Banner} from './components/Banner/Banner'
import { Blog } from './components/Blog/Blog';
import News from './components/News/News';


function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className='article'>
        <Blog></Blog>
        <News></News>
      </div>          
    </>
  );
}

export default App;
