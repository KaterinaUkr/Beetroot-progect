import axios from "axios";

export class Request {
	get(url) {
		return axios(url).then(res => res.data);
	}

	static post(url, body) {
		return axios({
			method: 'post',
			url,
			body
		})
	}
}