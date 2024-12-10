import Post from "./Post";
export default function Article() {
	return (
		<div className="article">
			<Post title='أكاديمية ترميز' body='أكاديمية ترميز أكاديمية ترميز' >
				<h3>20</h3>
			</Post>
			<Post  title='Hello world' body='this is the hello world article' />
			<Post  title='Post 3' body='this is the body of post 3' />
		
		</div>
	);
}
