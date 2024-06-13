import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../Header.jsx";
import { pathNames } from "../../assets/routes/useState.jsx";

export const Example2 = () => {
	const [value, setValue] = useState("old value");

	const changeValue = () => {
		setValue("new value");
	};

	return (
		<div>
			<Header title="Базовая теория useState" src="src/useState/Example2.jsx" />

			<p>
				Теперь давайте обновлять значение правильно, для этого на понадобится
				хук useState
			</p>
			<p>
				Он предоставляет массив из двух элементов, первый - это сама переменная,
				а второй - это функция для ее изменения
			</p>
			<p>
				Для изменения переменной нужно вызвать setState() функцию с новым
				значением, например вот так:
			</p>
			<code>setState("new value");</code>

			<p>Теперь попробуй нажать но кнопку "Change value" снова</p>
			<button onClick={changeValue}>Change value</button>

			<p>Текущее значение переменной value:</p>
			<code>{value}</code>

			<p>
				Теперь мы все сделали по правильному и React видит изменения, посе чего
				они отображаются на экране
			</p>

			<Link to={pathNames.useState.example3}>Следующее задание</Link>
		</div>
	);
};
