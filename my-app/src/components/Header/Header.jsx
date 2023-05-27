import './Header.scss'

export const Header = ({children}) => <header className='header'>
	Some header staff
	{children}
	Some header staff
</header>;

// export default Header    //якщо без export default, то додаємо в імпорті { Header }

