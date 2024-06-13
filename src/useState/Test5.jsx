import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../Header";
import { pathNames } from "../main";

export const Test5 = () => {
	const [languageInfo, setLanguageInfo] = useState({
		languageName: "javaScript",
		createdAt: "8 июля 1996",
	});

	const changeValue = () => {
		setLanguageInfo({ ...languageInfo, shorName: "JS" });
	};
	const codeString = `
  setLanguageInfo({ ...languageInfo, shorName: "JS" });
  `;

	return (
		<div>
			<Header title="Базовая теория useState" src="src/useState/Test4.jsx" />
			<p>
				Правильным же решением будет использовать useState для обновления
				состояния в React
			</p>
			<code>{codeString}</code>
			<p>Рассмотри что здесь произошло:</p>
			<p>
				В функцию <code>setLanguageInfo</code> мы передаем новый объект, в
				который через spred (<code>...</code>) оператор копируем все содержимое
				сторого состояния <code>languageInfo</code>, далее через запятую
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

			<Link to={pathNames.useState.test5}>Поговорим о массивах</Link>
		</div>
	);
};