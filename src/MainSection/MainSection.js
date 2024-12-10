import "./MainSection.css";
import Article from "./Aticle/Article";
import Aside from "./Aside/Aside";
export default function MainSection() {
	return (
		<div className="Main">
			<Article />
			<Aside />
		</div>
	);
}
