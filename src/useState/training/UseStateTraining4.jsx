import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../Header";

export const UseStateTraining4 = ({ title, srcPath, nextPageUrl }) => {
	const [languagesInfo, setLanguagesInfo] = useState([
		{
			name: "JavaScript",

			isLanguage: true,
		},
		{
			name: "TypeScript",
			isLanguage: true,
		},
		{
			name: "HTML",
			isLanguage: false,
		},
		{
			name: "React",
			isLanguage: false,
		},
	]);

	const changeValue = () => {
		//Ваш код здесь
	};

	return (
		<div>
			<Header title={title} src={srcPath} />

			<p>
				Вом необходимо оставить в массиве только те элементы которые являются
				языками программирования
			</p>

			<button onClick={changeValue}>Change value</button>
			<p>Текущее значение состояния: </p>

			{languagesInfo.map((languageInfo) => {
				return (
					<code className="code_block" key={languageInfo.name}>
						{languageInfo.name}
					</code>
				);
			})}

			<Link to={nextPageUrl}>Следующее задание</Link>
		</div>
	);
};
