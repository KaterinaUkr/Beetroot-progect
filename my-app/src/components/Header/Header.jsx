import './Header.scss';
import Logo from './Logo/Logo'; 
import Menu from './Menu/Menu';

export const Header = () =>
	
	<div className="header">
		<Logo></Logo>
		<h1>Blog name</h1>
		<Menu></Menu>

	</div>


export default Header;