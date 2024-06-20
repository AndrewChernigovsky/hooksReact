import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../Header";

export const UseEffectTraining1 = ({ title, srcPath, nextPageUrl }) => {
	const [state, setState] = useState(0);

	const changeValue = () => {
		const randomNumber = Math.random();
		setState(randomNumber);
	};

	return (
		<div>
			<Header title={title} src={srcPath} />
			<p>
				Сделай так, что бы в консоли сообщение <code>"Привет useEffect"</code>{" "}
				выводилось только при первом рендере страницы, оно не должно появлятся
				при нажатии на кнопку
			</p>
			<p>
				Что бы посмотреть как это работает, открой консоль сайта и посмотри логи
				которые генерирует эта страница при каждом нажатии "Change value"
			</p>
			<button onClick={changeValue}>Change value</button>
			<p>
				Значение состояния:
				<code>{state}</code>
			</p>
			<Link to={nextPageUrl}>Тренировочное задание 2</Link>
		</div>
	);
};
