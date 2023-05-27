import { useEffect, useState } from "react";
import { Blogitem } from './Blogitem/Blogitem';

// export const Blog = () => {
// 	const [toggle, setToggle] = useState(false)

// 	useEffect(() => {
// 		console.log('useEffect Blog')
// 	}, [toggle]);

// 	const clickHandler = () => {
// 		setToggle(!toggle);
// 	}

// 	return <div className="blog">
// 		{/* <button onClick={clickHandler}>Click me</button> */}
// 		blog works
// 	</div>
// };


export const Blog = () => {
	const [BlogData, setBlogData] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts').then(res =>res.json()).then(data =>setBlogData(data))
	}, []);

	// 	return <div className="blog">
	// 		{BlogData.map(item => <Blogitem title={item.title} body={item.body}></Blogitem>)}
	// </div>
	
//інший спосіб вивести
	return <div className="blog">
			{BlogData.map(item => <Blogitem key={item.id} {...item}></Blogitem>)}
		</div>

};