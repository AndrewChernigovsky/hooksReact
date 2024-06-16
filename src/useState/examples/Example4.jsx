import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../Header.jsx";
import { pathNames } from "../../assets/routes/useState.jsx";
import { useStateTopicsInfo } from "../TopicsList.jsx";

export const Example4 = () => {
	const [languageInfo, setLanguageInfo] = useState({
		languageName: "JavaScript",
		createdAt: "8 июля 1996",
	});

	const changeValue = () => {
		setLanguageInfo({ ...languageInfo, shorName: "JS" });
	};

	return (
		<div>
			<Header
				title={useStateTopicsInfo.example.example4.name}
				src={useStateTopicsInfo.example.example4.src}
			/>
			<p>
				Правильным же решением будет использовать useState для обновления
				состояния в React
			</p>
			<code>{`setLanguageInfo({ ...languageInfo, shorName: "JS" });`}</code>
			<p>Рассмотри что здесь произошло:</p>
			<p>
				В функцию <code>setLanguageInfo</code> мы передаем новый объект, в
				который через spred (<code>...</code>) оператор копируем все содержимое
				старого состояния <code>languageInfo</code>, далее через запятую
				добавляем в этот объект новое поле <code>shorName</code>
			</p>

			<p>Нажми на кнопку "Change value" и убедись что это работает:</p>

			<button onClick={changeValue}>Change value</button>

			<p>Текущее значение переменной languageInfo:</p>
			<code className="code_block">Имя языка: {languageInfo.languageName}</code>
			<code className="code_block">
				Сокращенное название: {languageInfo.shorName}
			</code>
			<code className="code_block">
				Дата создания: {languageInfo.createdAt}
			</code>

			<Link to={pathNames.useState.example5}>Поговорим о массивах</Link>
		</div>
	);
};
