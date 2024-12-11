import "./Aside.css";
import Button from "./Button";
export default function Aside() {
	const TagButtons = [
		{
			id: "1",
			tag: " جديدة",
			content: "🎆🎆🎆",
		},
		{
			id: "2",
			tag: "الأكثر قراءة",
			content: (
				<>
					<span>🎊🎊🎊</span>
					<img
						style={{ borderRadius: "5px", marginTop: "5px" }}
						src="https://placehold.co/100x50/pink/FFFFFF.png"
						alt="pink"
					/>
				</>
			),
		},
		{
			id: "3",
			tag: "مقالات مميزة",
			content: (
				<img
					style={{ borderRadius: "5px", marginTop: "5px" }}
					src="https://placehold.co/100x100/orange/FFFFFF.png"
					alt="orange"
				/>
			),
		},
	];
	const Buttons = TagButtons.map((tagB) => {
		return <Button key={tagB.id} tag={tagB.tag} children={tagB.content} />;
	});
	return <aside>{Buttons}</aside>;
}
