import Post from "./Post";
export default function Article() {
	const Posts = [
		{
			id: "1",
			title: "أكاديمية ترميز",
			body: "أكاديمية ترميز أكاديمية ترميز",
		},
		{
			id: "2",
			title: "Hello world",
			body: "this is the hello world article",
		},
		{
			id: "3",
			title: "Post 3",
			body: "this is the body of post 3",
		},
	];
	const PostList = Posts.map((post) => {
		return <Post key={post.id} title={post.title} body={post.body} />;
	});
	return <div className="article">{PostList}</div>;
}
