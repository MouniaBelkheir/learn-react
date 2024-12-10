import "./Aside.css";
import Button from "./Button";
export default function Aside() {
	return (
		<aside>
			<Button tag=" جديدة">
				<>&#x1F4AB;</>
				<>&#x1F4AB;</>
				<>&#x1F4AB;</>
			</Button>
			<Button tag="الأكثر قراءة">
				<br />
				<>&#x2B50;</>
				<>&#x2B50;</>
				<>&#x2B50;</>
				<img
					style={{ borderRadius: "5px", marginTop: '5px' }}
					src="https://placehold.co/100x50/pink/FFFFFF.png"
					alt="flower"
				/>
			</Button>
			<Button tag="مقالات مميزة">
				<img
					style={{ borderRadius: "5px", marginTop: '5px' }}
					src="https://placehold.co/100x100/orange/FFFFFF.png"
					alt="flower"
				/>
			</Button>
		</aside>
	);
}
