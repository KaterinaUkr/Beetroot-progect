
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
// import { DataTable } from './components/DataTable/DataTable';
// import { DataTableClosed } from './components/DataTable/DataTableClosed';
// import { Sidebar } from './components/Sidebar/Sidebar';
import {router} from './pages/router.config'

import {
  BrowserRouter,
  // createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
      
      <Header></Header>
      <Main>
        <Routes>
          <Route exact path="/">
            

          </Route>

        </Routes>
        {/* <RouterProvider router={router} /> */}

      </Main>
      
      </BrowserRouter>
      
      
      
    </>
  




    // <>
    //   <Sidebar></Sidebar>
    //   <DataTable></DataTable>
    //   <DataTableClosed></DataTableClosed>
    // </>
  );
}

export default App;
