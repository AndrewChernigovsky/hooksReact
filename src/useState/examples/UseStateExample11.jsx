import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../Header.jsx";

export const UseStateExample11 = ({ title, srcPath, nextPageUrl }) => {
	const [counter, setCounter] = useState(0);

	const changeValue = () => {
		setCounter(counter + 1);
		setCounter(counter + 1);
		setCounter(counter + 1);
	};

	const correctChangeValue = () => {
		setCounter((prevState) => prevState + 1);
		setCounter((prevState) => prevState + 1);
		setCounter((prevState) => prevState + 1);
	};

	return (
		<div>
			<Header title={title} src={srcPath} />
			<p>
				Все состояния которые устанавливает функция группируются в один вызов и
				выполняются разом. Это значит, что если мы захотим изменить значение
				одного и того же состояния несколько раз в оной функции мы увидим нечто
				необычное, похожее на баг, давайте посмотрим на примере:
			</p>
			<p>
				В функции <code>changeValue</code> мы три раза вызываем{" "}
				<code>setCounter(counter + 1)</code> в надежде, что мы получим 3, но увы
				это не так
			</p>

			<button onClick={changeValue} style={{ marginBottom: "10px" }}>
				Попытка увеличить счетчик на 3
			</button>
			<p>
				Значение счетчика: <code>{counter}</code>
			</p>

			<p>
				Значение счетчика увеличивается по еденице, потому, что все вызовы
				<code>{"setCounter(counter + 1);"}</code> группируются и вызываются
				сразу, а так как они все обращаются к текущему значению{" "}
				<code>counter</code> то и прибавка происходит только по еденице ибо для
				каждого из них значение все еще не увеличено
			</p>

			<p>Теперь потыкай на другую кнопку, которая делает это правильно:</p>

			<button onClick={correctChangeValue} style={{ marginBottom: "10px" }}>
				Правильная попытка увеличить счетчик на 3
			</button>
			<p>
				Значение счетчика: <code>{counter}</code>
			</p>

			<p>
				Что значит эта запись{" "}
				<code>{"setCounter((prevState) => prevState + 1);"}</code> ?
			</p>
			<p>
				Теперь состояние будет устанавливатся не на основе текущего состояния в
				<code>useState</code>, а на основе предыдущего вычисленного состояния,
				теперь каждая из функций ждет вычисления от предыдущей и делает
				вычисления на его основе
			</p>

			<Link to={nextPageUrl}>Начать практиковаться</Link>
		</div>
	);
};
