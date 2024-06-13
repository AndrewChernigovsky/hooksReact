import { Link } from "react-router-dom";
import { Header } from "../Header";
import { pathNames } from "../main";

export const Test5 = () => {
	const languages = ["HTML", "CSS"];

	const changeValue = () => {
		languages.push("JavaScript");
	};

	return (
		<div>
			<Header title="Базовая теория useState" src="src/useState/Test5.jsx" />
			<p>
				Как не трудно догадатся с массивами тоже не все так просто, просой push
				не работает
			</p>

			<code className="code_block">{`const languages = ["HTML", "CSS"];`}</code>
			<code className="code_block">{`languages.push('JavaScript');`}</code>

			<p>Нажми на кнопку "Change value" и убедись что это не работает:</p>

			<button onClick={changeValue}>Change value</button>

			<p>Текущее значение переменной languages:</p>
			{languages.map((language) => {
				return (
					<code className="code_block" key={language}>
						{language}
					</code>
				);
			})}

			<Link to={pathNames.useState.test6}>Узнать как правильно</Link>
		</div>
	);
};
