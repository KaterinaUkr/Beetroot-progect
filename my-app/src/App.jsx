
import './App.css';
import { DataTable } from './components/DataTable/DataTable';
import { DataTableClosed } from './components/DataTable/DataTableClosed';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <DataTable></DataTable>
      <DataTableClosed></DataTableClosed>
    </>
  );
}

export default App;
