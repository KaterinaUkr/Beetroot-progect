import './Blog.scss';
// import './Blogitem/Blogitem'
import Blogitem from './Blogitem/Blogitem';

export const Blog = () =>
	<div className='blog'>
		<h2 className='blog__title'>Blog</h2>
		<Blogitem></Blogitem>
		<Blogitem></Blogitem>
		<Blogitem></Blogitem>
		<Blogitem></Blogitem>
	</div>
	


export default Blog;