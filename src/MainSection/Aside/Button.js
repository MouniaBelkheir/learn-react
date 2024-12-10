import "./Button.css";
export default function Button({ tag, children }) {
	return (
		<button>
			{tag}
			{children}
		</button>
	);
}
