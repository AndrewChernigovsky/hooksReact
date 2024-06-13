import { Link } from "react-router-dom";
import { pathNames } from "./assets/routes/useState";

function App() {
	return (
		<>
			<p>
				В этом базовом гайде вы изучите основы работы с хуками, а так же
				выполните несколько практических заданий
			</p>
			<Link to={pathNames.useState.example1}>Начать изучать</Link>
		</>
	);
}

export default App;
