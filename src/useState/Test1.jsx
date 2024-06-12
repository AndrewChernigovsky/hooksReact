import { Link } from "react-router-dom";

export const Test1 = () => {
	let value = "old value";

	const changeValue = () => {
		value = "new value";
	};
	return (
		<div>
			<h2>Базовая теория useState</h2>
			<p>
				Код этого файла можно найти в: <code>src/useState/Test1.jsx</code>
			</p>
			<div className="code_wrapper">
				<p>Вот так в ванильном JS мы изменяли значение переменной:</p>
				<code>let value = "old value"; </code>
				<code>value = "new value";</code>
			</div>

			<p>
				Теперь попробуй нажать на кнопку "Change value", она должна изменить
				значение
			</p>

			<button onClick={changeValue}>Change value</button>

			<p>Текущее значение переменной: "{value}"</p>

			<p>Увы в React такие приемы не работают</p>
			<p>В следующих уроках вы узнаете как это исправить</p>

			<Link>Следующее задание</Link>
		</div>
	);
};
