import "./Post.css";
export default function Post({ title, body, children }) {
	return (
		<div className="post">
			<div style={{ fontSize: "10px", margin:"0" }}>{children}</div>
			<h2>{title}</h2>
			<hr />
			<p>{body}</p>
		</div>
	);
}
