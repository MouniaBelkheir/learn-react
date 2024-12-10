import "./Aside.css";
import Button from "./Button";
export default function Aside() {
	return (
		<aside>
			<Button tag=" جديدة">
				<span>&#x1F4AB; &#x1F4AB; &#x1F4AB;</span>
			</Button>
			<Button tag="الأكثر قراءة">
				<br />
				<span>&#x2B50; &#x2B50; &#x2B50;</span>
				<img
					style={{ borderRadius: "5px", marginTop: "5px" }}
					src="https://placehold.co/100x50/pink/FFFFFF.png"
					alt="flower"
				/>
			</Button>
			<Button tag="مقالات مميزة">
				<img
					style={{ borderRadius: "5px", marginTop: "5px" }}
					src="https://placehold.co/100x100/orange/FFFFFF.png"
					alt="flower"
				/>
			</Button>
		</aside>
	);
}
