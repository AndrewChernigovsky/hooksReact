import { Link } from "react-router-dom";
import { Header } from "../../Header.jsx";

export const UseStateExample3 = ({ title, srcPath, nextPageUrl }) => {
	const languageInfo = { languageName: "javaScript", createdAt: "8 июля 1996" };

	const changeValue = () => {
		languageInfo.shorName = "JS";
	};

	return (
		<div>
			<Header title={title} src={srcPath} />

			<p>Работа с примитивами это - примитивно</p>
			<p>
				Посмотрим как следует работать с объектами. Как не сложно понять
				стандартные способы как в ванильном JS не работают
			</p>
			<code>languageInfo.shorName = 'JS'</code>

			<p>Нажми на кнопку "Change value" и убедись что это не работает:</p>

			<button onClick={changeValue}>Change value</button>

			<p>Текущее значение переменной languageInfo:</p>
			<code className="code_block">Имя языка: {languageInfo.languageName}</code>
			<code className="code_block">
				Сокращенное название: {languageInfo.shorName}
			</code>
			<code className="code_block">
				Дата создания: {languageInfo.createdAt}
			</code>

			<Link to={nextPageUrl}>Посмотрим как можно сделать это правильно</Link>
		</div>
	);
};
