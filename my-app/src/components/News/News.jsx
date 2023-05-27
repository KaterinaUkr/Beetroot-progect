import axios from "axios";
import { useEffect, useState } from "react";
import { Alert} from 'react-bootstrap';

import { Newsitem } from "./Newsitem/Newsitem";

export const News = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		const getNews = async () => {
			const data = await axios('https://saurav.tech/NewsAPI/everything/cnn.json').then(res => res.data);
			setNews(data.articles);
		}

		getNews();
	}, []);

	return news.length ? news.map((item, index) => <Newsitem key={index} {...item}></Newsitem>) : <Alert variant="primary">No news data</Alert>			
};
	
    
