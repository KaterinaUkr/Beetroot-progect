import './Sidebar.scss'
// import './home.svg'
import { Nav, Col, Image } from 'react-bootstrap'
import { ReactComponent as Homeicon } from './Homeicon.svg';
import { ReactComponent as Depositsicon } from './Depositsicon.svg';
import { ReactComponent as Offersicon } from './Offersicon.svg';
import { ReactComponent as Paymentsicon } from './Paymentsicon.svg';
import { ReactComponent as Settingsicon } from './Settingsicon.svg';
// import Photo from './assets/Photo.png'
import Photo from './Photo.png'

export const Sidebar = () => {
	return (
		<>
		<div className='sidebar-menu'>
			<Col className='sidebar-menu__account' xs={6} md={4}>
					<Image className='sidebar-menu__photo' src={Photo} roundedCircle />
					<h3 className='sidebar-menu__name'>Scott Grant</h3>
			</Col>
			<Nav defaultActiveKey="/home" className="sidebar-menu__nav flex-column">
				<Nav.Link href="/home"><Homeicon className="sidebar-menu__icon" />Home</Nav.Link>				
				<Nav.Link eventKey="link-1"><Depositsicon className="sidebar-menu__icon"/>Deposits</Nav.Link>
				<Nav.Link ><Offersicon className="sidebar-menu__icon"/>Offers</Nav.Link>
				<Nav.Link><Paymentsicon className="sidebar-menu__icon"/>Payments</Nav.Link>
				<Nav.Link eventKey="link-2"><Settingsicon className="sidebar-menu__icon"/>Settings</Nav.Link>
			</Nav>
		</div>	
			
			
		</>
		
		
	
	)}


