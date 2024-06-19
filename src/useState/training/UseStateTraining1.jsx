import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../Header";

export const UseStateTraining1 = ({ title, srcPath, nextPageUrl }) => {
	const [state, setState] = useState("JavaScript");

	const changeValue = () => {
		//Ваш код здесь
	};

	return (
		<div>
			<Header title={title} src={srcPath} />
			<p>
				Вам необходимо по нажатию на кнопку сделать так, что бы состояние
				JavaScript изменилось на React
			</p>

			<button onClick={changeValue}>Change value</button>
			<p>Текущее значение состояния: </p>
			<code className="code_block">{state}</code>
			<Link to={nextPageUrl}>Следующее задание</Link>
		</div>
	);
};
