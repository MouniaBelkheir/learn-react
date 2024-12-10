import "./Post.css";
export default function Post({title,body}) {
	return (
		<div className="post">
			<h2>This is the post number: {title}</h2>
			<hr />
			<p>This is the post number {body}</p>
		</div>
	);
}
