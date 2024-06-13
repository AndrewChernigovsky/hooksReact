import { Link } from "react-router-dom";
import { pathNames } from "./main";

function App() {
	return (
		<>
			<p>
				В этом базовом гайде вы изучите основы работы с хуками, а так же
				выполните несколько практических заданий
			</p>
			<Link to={pathNames.useState.test1}>Начать изучать</Link>
		</>
	);
}

export default App;
