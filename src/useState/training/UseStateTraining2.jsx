import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../Header";

export const UseStateTraining2 = ({ title, srcPath, nextPageUrl }) => {
	const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

	const changeValue = () => {
		//Ваш код здесь
	};

	return (
		<div>
			<Header title={title} src={srcPath} />
			<p>Вам необходимо по нажатию на кнопку изменить число 3 на слово "три"</p>

			<button onClick={changeValue}>Change value</button>
			<p>Текущее значение состояния: </p>
			<div>
				{numbers.map((number) => {
					return <code key={number}>{number}</code>;
				})}
			</div>
			<Link to={nextPageUrl}>Следующее задание</Link>
		</div>
	);
};
