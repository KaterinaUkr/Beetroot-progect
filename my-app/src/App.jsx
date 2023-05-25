
import './App.scss';

import Title from './components/Title/Title';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

// const element = (textToShow) => <div> {textToShow} </div>

// function App() {
//   let text = 'Some text';
//   return (
//     <h1>{ element(text) }</h1>
//   );
// }


function App() {
  let text = 'Some text';
  return <>
    <Header></Header>
    <main className='main'>
      <Title></Title>
    </main>    
    <Footer></Footer>
  </>
  ;
}



export default App;
