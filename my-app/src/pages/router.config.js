import { Header } from '../components/Header/Header';
import { DataTable } from '../components/DataTable/DataTable';
import { DataTableClosed } from '../components/DataTable/DataTableClosed';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Main } from '../components/Main/Main';

import {
  createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";


export const router = createBrowserRouter([  
	
	{
    path: "/",
    element: <Main />, 
  },
	{
    path: "/Sidebar",
    element: <Sidebar />,
  },
  {
    path: "/Active",
    element: <DataTable />,
  },
  {
    path: "/Closed",
    element: <DataTableClosed />,
  },
]);