import { Link } from "react-router-dom";
import { Header } from "../Header";
import { pathNames } from "../main";

export const Test1 = () => {
	let value = "old value";

	const changeValue = () => {
		value = "new value";
	};
	return (
		<div>
			<Header title="Базовая теория useState" src="src/useState/Test1.jsx" />

			<p>Вот так в ванильном JS мы изменяли значение переменной:</p>

			<code className="code_block">let value = "old value"; </code>
			<code className="code_block">value = "new value";</code>

			<p>
				Теперь попробуй нажать на кнопку "Change value", она должна изменить
				значение
			</p>

			<button onClick={changeValue}>Change value</button>

			<p>Текущее значение переменной value:</p>

			<code>{value}</code>

			<p>Увы в React такие приемы не работают</p>

			<p>В следующих уроках вы узнаете как это исправить</p>

			<Link to={pathNames.useState.test2}>Следующее задание</Link>
		</div>
	);
};
