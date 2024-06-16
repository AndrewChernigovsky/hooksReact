import { useState } from "react";
import { Header } from "../../Header";
import { useStateTopicsInfo } from "../TopicsList";

export const Training1 = () => {
	const [state, setState] = useState("JavaScript");

	const changeValue = () => {
		//Ваш код здесь
	};

	return (
		<div>
			<Header
				title={useStateTopicsInfo.training1.title}
				src={useStateTopicsInfo.training1.src}
			/>
			<p>
				Вам необходимо по нажатию на кнопку сделать так, что бы состояние
				JavaScript изменилось на React
			</p>

			<button onClick={changeValue}>Change value</button>
			<p>Текущее значение переменной state: </p>
			<code>{state}</code>
		</div>
	);
};
