import {Link} from "react-router-dom";

export default function Home() {
	return (
		<div>
			<h1>Home</h1>
			<p>Welcome!</p>
			<Link to="/test">Go to /test</Link>
		</div>
	);
}
