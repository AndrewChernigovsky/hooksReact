import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<p>
				В этом базовом гайде вы изучите основы работы с хуками, а так же
				выполните несколько практических заданий
			</p>
			<Link to="useState-test-1">Начать изучать</Link>
		</>
	);
}

export default App;
