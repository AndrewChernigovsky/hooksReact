import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../Header.jsx";
import { useStateTopicsInfo } from "../TopicsList.jsx";

export const Example6 = () => {
	const [languages, setLanguages] = useState(["HTML", "CSS"]);

	const changeValue = () => {
		setLanguages([...languages, "JS"]);
	};

	return (
		<div>
			<Header
				title={useStateTopicsInfo.example6.path.name}
				src={useStateTopicsInfo.example6.path.src}
			/>
			<p>
				Правильным же решением будет использовать useState для обновления
				состояния в React
			</p>
			<code>{`setLanguages([...languages, "JS"]);`}</code>
			<p>Рассмотри что здесь произошло:</p>
			<p>
				В функцию <code>setLanguages</code> мы передаем новый массив, в который
				через spred (<code>...</code>) оператор копируем все содержимое старого
				состояния <code>setLanguages</code>, далее через запятую добавляем в
				этот массив новое значение <code>"JS"</code>
			</p>

			<p>Нажми на кнопку "Change value" и убедись что это работает:</p>

			<button onClick={changeValue}>Change value</button>

			<p>Текущее значение переменной languages:</p>
			{languages.map((language) => {
				return (
					<code className="code_block" key={language}>
						{language}
					</code>
				);
			})}

			<Link to={useStateTopicsInfo.example7.path}>Следующий урок</Link>
		</div>
	);
};
