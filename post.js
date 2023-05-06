import { getData, API } from "./utils/utils.js";

const url = new URL(location.href)

const postId = url.searchParams.get('id');

const getPostAndComments = async () => {
	// const post = await getData(`${API}posts/${postId}`);
	// const comments = await getData(`${API}comments?postId=${postId}`)
	
	const [post, comments] /*або data*/ = await Promise.all([getData(`${API}posts/${postId}`), getData(`${API}comments?postId=${postId}`)]);
	console.log(post, comments); // console.log(data);
}

getPostAndComments();
// 