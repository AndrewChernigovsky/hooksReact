import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../Header";
import { pathNames } from "../main";

export const Test4 = () => {
	const languageInfo = { languageName: "javaScript", createdAt: "8 июля 1996" };

	const changeValue = () => {
		languageInfo.shorName = "JS";
	};

	return (
		<div>
			<Header title="Базовая теория useState" src="src/useState/Test2.jsx" />

			<p>Работа с примитивами это - примитивно</p>
			<p>
				Посмотрим как следует работать с объектами. Как не сложно понять
				стандартные способы как в ванильном JS не работают
			</p>
			<code>languageInfo.shorName = 'JS'</code>

			<p>Нажми на кнопку "Change value" и убедись что это не работает:</p>

			<button onClick={changeValue}>Change value</button>

			<p>Текущее значение переменной languageInfo:</p>
			<code>Имя языка: {languageInfo.languageName}</code>
			<code>Сокращенное название: {languageInfo.shorName}</code>
			<code>Дата создания: {languageInfo.createdAt}</code>

			<Link to={pathNames.useState.test4}>
				Посмотрим как можно сделать это правильно
			</Link>
		</div>
	);
};
