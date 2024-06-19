import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../Header";

export const UseStateTraining3 = ({ title, srcPath, nextPageUrl }) => {
	const [languageInfo, setLanguageInfo] = useState({
		name: "JavaScript",
		date: "1996",
	});

	const changeValue = () => {
		//Ваш код здесь
	};

	return (
		<div>
			<Header title={title} src={srcPath} />
			<p>
				Вом необходимо добавить в объект состояния новое поле{" "}
				<code>shortName</code> со значением: <code>JS</code>
			</p>

			<button onClick={changeValue}>Change value</button>
			<p>Текущее значение состояния: </p>

			<code className="code_block">Имя языка: {languageInfo.name}</code>
			<code className="code_block">Короткое имя: {languageInfo.shortName}</code>
			<code className="code_block">Дата создания: {languageInfo.date}</code>

			<Link to={nextPageUrl}>Следующее задание</Link>
		</div>
	);
};
