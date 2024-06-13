import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../Header";
import { pathNames } from "../main";

export const Test8 = () => {
	const [languagesInfo, setLanguagesInfo] = useState([
		{
			name: "TypeScript",
			createdAt: "2012",
		},
		{
			name: "HTML",
			createdAt: "1991",
		},
		{
			name: "JavaScript",
			createdAt: "1996",
		},
	]);

	const changeValue = () => {
		const onlyLanguages = languagesInfo.filter(
			(language) => language.name !== "HTML",
		);
		setLanguagesInfo(onlyLanguages);
	};

	return (
		<div>
			<Header title="Базовая теория useState" src="src/useState/Test8.jsx" />
			<p>
				У нас есть начальное состояние: это массив объектов с информацией о
				языках программирования
			</p>
			<p>
				Но этот массив не совсем правильный, так как HTML не является языком
				программирования
			</p>
			<p>По нажатию на кнопку мы хоти его удалить из списка языков</p>

			<button onClick={changeValue} style={{ marginBottom: "10px" }}>
				Change value
			</button>

			{languagesInfo.map((language) => {
				return (
					<div key={language.name}>
						<code>name: {language.name};</code>
						<code>createdAt: {language.createdAt};</code>
					</div>
				);
			})}
			<p>Что здесь произошло?</p>
			<p>
				Зная то, что метод <code>filrer</code> возвращает на новый массив мы
				используем его, для удаления не нужного элемента из массива, далее мы
				устанавливаем этот новый массив как новое значение состояния используя
				функцию <code>{"setLanguagesInfo(onlyLanguages);"}</code>
			</p>
			<Link to={pathNames.useState.test8}>Изменение массива объектов</Link>
		</div>
	);
};
