import "./Button.css";
export default function Button({ tag, children }) {
	return (
		<button>
            {tag}
            <br />
			{children}
		</button>
	);
}
