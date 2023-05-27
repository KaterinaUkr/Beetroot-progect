import './News.scss';
import Newsitem from './Newsitem/Newsitem';

export const News = () =>
	<div className='news'>
		<h2 className='news__title'>News</h2>
		<Newsitem></Newsitem>
		<Newsitem></Newsitem>
		<Newsitem></Newsitem>
	</div>
	


export default News;