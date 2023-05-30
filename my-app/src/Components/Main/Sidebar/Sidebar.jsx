import './Sidebar.scss'
import Nav from 'react-bootstrap/Nav';

// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faWindowRestore, faUserGroup, faComments, faClipboardList } from '@fortawesome/free-solid-svg-icons'


export const Sidebar = () =>	
	<>
		<Nav defaultActiveKey="/home" className="sidebar flex-column col-md-2">
			<Nav.Link href="/#"><FontAwesomeIcon icon={faClipboardList} /> Dashboard</Nav.Link>
      <Nav.Link href="/#"><FontAwesomeIcon icon={faDollarSign} /> Sales</Nav.Link>
      <Nav.Link href="/#"><FontAwesomeIcon icon={faWindowRestore} /> Catalog</Nav.Link>
      <Nav.Link href="/#"><FontAwesomeIcon icon={faUserGroup} /> Customers</Nav.Link>
      <Nav.Link href="/#"><FontAwesomeIcon icon={faComments} /> Reviews</Nav.Link>
    </Nav>
	</>
    
  