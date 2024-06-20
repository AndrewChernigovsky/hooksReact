import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../Header";

export const UseEffectExample2 = ({ title, srcPath, nextPageUrl }) => {
	const [state, setState] = useState(0);

	const changeValue = () => {
		const randomNumber = Math.random();
		setState(randomNumber);
	};

	useEffect(() => {
		console.log("Отработал useEffect");
	}, []);

	console.log("Произошел ререндер компонента");

	return (
		<div>
			<Header title={title} src={srcPath} />
			<p>
				Здесь представлен базовый пример <code>useEffect</code> с пустым
				массивом зависимостей
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
			<h3>Что здесь произошло?</h3>
			<p>
				При первой загрузке страницы отработали оба <code>console.log</code>,
				это потому что произошел как первый рендер компонента, так и обычный
				рендер компонента
			</p>
			<p>
				По сути это одно и то же. Но вот при повторном ререндере компонента,
				когда мы меняем состояния нажатиями на кнопку, <code>console.log</code>{" "}
				из useEffect уже не отрабатывает, так как это уже не первый рендер
				компонента
			</p>
      <p>Важным моментом является то, что сначала отрабатывает <code>"Произошел ререндер компонента"</code>, а только потом<code>"Отработал useEffect"</code></p>
      <p>Это проиходит потому, что <code>useEffect</code> вызывается после ПОЛНОГО рендера компонента, то есть выполняется весь его код и рендер HTML, а только потом он уже будет вызван</p>
			<Link to={nextPageUrl}>Как это может помочь на деле?</Link>
		</div>
	);
};
