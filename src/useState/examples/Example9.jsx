import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../Header.jsx";
import { pathNames } from "../../assets/routes/useState.jsx";

export const Example9 = () => {
	const [languagesInfo, setLanguagesInfo] = useState([
		{
			name: "TypeScript",
			createdAt: "2012",
			shortName: "TS",
		},
		{
			name: "JavaScript",
			createdAt: "1996",
			shortName: "CSS",
		},
	]);

	const changeValue = () => {
		const correctArray = languagesInfo.map((language) => {
			if (language.name === "JavaScript") {
				return { ...language, shortName: "JS" };
			}
			return language;
		});

		setLanguagesInfo(correctArray);
	};

	return (
		<div>
			<Header title="Базовая теория useState" src="src/useState/Example9.jsx" />
			<p>
				Давай снова отредактируем наш немного не правильный массив объектов с
				языками
			</p>
			<p>Короткое имя для JavaScript указано не верно и мы хоти его поменять</p>
			<p>Нажми на кнопку и убедись что оно изменилось на верное</p>

			<button onClick={changeValue} style={{ marginBottom: "10px" }}>
				Change value
			</button>

			{languagesInfo.map((language) => {
				return (
					<div key={language.name}>
						<code>name: {language.name};</code>
						<code>createdAt: {language.createdAt};</code>
						<code>shortName: {language.shortName};</code>
					</div>
				);
			})}
			<p>Что здесь произошло?</p>
			<p>
				Зная то, что метод <code>map</code> возвращает на новый массив мы
				используем его, для перебора элементов массива
			</p>
			<p>
				Внутри мы проверяем, <code>if(language.name === "JavaScript")</code>{" "}
				если это так, то мы возвращаем новый объект с обновленным полем{" "}
				<code>{'return { ...language, shortName: "JS" }'}</code>
				Если же это не тот объект который нам нужен, мы его возвращаем в
				исходном виде
			</p>
			<Link to={pathNames.useState.example8}>Изменение массива объектов</Link>
		</div>
	);
};
