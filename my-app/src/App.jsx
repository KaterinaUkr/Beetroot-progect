import './App.scss';

import { Header } from './components/Header/Header'
import {Banner} from './components/Banner/Banner'
import { Blog } from './components/Blog/Blog';
import { Main } from './components/Main/Main';
import News from './components/News/News';
// import Blogitem from './components/News/News';


function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Main>
        <Blog></Blog>
        <News></News>
      </Main>          
    </>
  );
}

export default App;
