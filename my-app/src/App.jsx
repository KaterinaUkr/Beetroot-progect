
import './App.scss';

import Title from './components/Title/Title';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import { Blog } from './components/Blog/Blog';

import React, { useState } from "react";

const data = [
{
  id: 1,
  title: "title 1"
},
{
  id: 2,
  title: "title 2"
},
{
  id: 3,
  title: "title 3"
},
];

// const element = (textToShow) => <div> {textToShow} </div>

// function App() {
//   let text = 'Some text';
//   return (
//     <h1>{ element(text) }</h1>
//   );
// }


// function App() {
//   let title = 'First awesome title'

//   return <>
//     <Header></Header>
//     <main className='main'>
//       <Title title={title} />
//       <Title title="Second title"/>
//       <Title title="Some other title"/>
      
//     </main>
//     <Footer></Footer>
//   </>
//   ;
// }

// перетворюємо компоненту в класи
// class App extends React.Component {
//   // title = 'First awesome title';

//   // letChangeTitle() {
//   //   this.title = 'Changed title text';
//   // }

//   constructor() {
//     super();
//     this.state = ({
//       title: 'First awesome title'
//     });
//   }

//   letChangeTitle() {
//     this.setState ({
//       title: 'Changed title text'
//     });    
//   }
//   render() {
//     return (
//       <>
//         <Header></Header>
//         <button onClick={() => this.letChangeTitle()}>Change title</button>
//         <main className='main'>
//           <Title title={this.state.title} />
//           <Title title="Second title" />
//           <Title title="Some other title" />
//         </main>
//         <Footer></Footer>
//       </>
//     );
//   }  
// }


function App() {
  const [title, setTitle] = useState('My Title');
  const [isShowFooter, setIsShowFooter] = useState(false);
  
  const letChangeTitle = () => {    
    setTitle('Changed title text');     
  }

  const toggleFooterShown = () => {
    setIsShowFooter( !isShowFooter );
  }
  
    return (
      <>
        <Header>
          <div>
            <h1>Brand name</h1>
          </div>
        </Header>
        <button onClick={letChangeTitle}>Change title</button>
        <button onClick={toggleFooterShown}>Toogle footer</button>
        <main className='main'>
          <Blog></Blog>
          {/* {data.map(({ title, id }) => <Title key={id} title={title} />)} */}
          

          {/* <Title title={title} />
          <Title title="Second title" />
          <Title title="Some other title" /> */}


        </main>
        {
          isShowFooter && <Footer></Footer>
          }

        {/* <Footer></Footer> */}
      </>
    );
  }
  



export default App;
