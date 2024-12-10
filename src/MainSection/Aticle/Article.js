import Post from "./Post";
export default function Article() {
	return (
		<div className="article">
			<Post title='One' body='one' />
			<Post  title='Two' body='two' />
			<Post  title='Three' body='three' />
			<Post  title='Four' body='four' />
			<Post  title='Five' body='five' />
		</div>
	);
}
