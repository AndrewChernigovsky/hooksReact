import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../Header.jsx";

export const UseStateExample10 = ({ title, srcPath, nextPageUrl }) => {
	const [taskInfo, setTaskInfo] = useState({
		text: "Изучить как работает переключение булувого флага",
		isComplete: false,
	});

	const changeValue = () => {
		setTaskInfo({ ...taskInfo, isComplete: !taskInfo.isComplete });
	};

	return (
		<div>
			<Header title={title} src={srcPath} />
			<p>
				Очень часто нам нужно не просто один раз поменять значение, а
				переключать его туда и обратно
			</p>
			<p>
				Мы можем сделать это вот таким простым приемом:{" "}
				<code>{"setState(!state)"}</code>
			</p>
			<p>
				Работает это следующим образом: мы берем переменную из текущего
				состояния и инвертируем ее значение на противоположное, с помощью
				оператора <code>!</code>
			</p>

			<button onClick={changeValue} style={{ marginBottom: "10px" }}>
				Изменить статус выполнено
			</button>

			<p
				style={{
					textDecoration: taskInfo.isComplete ? "line-through" : "none",
				}}
			>
				{taskInfo.text}
			</p>
			<Link to={nextPageUrl}>Начать практиковаться</Link>
		</div>
	);
};
