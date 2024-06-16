import { Link } from "react-router-dom";
import { Header } from "../../Header.jsx";
import { useStateTopicsInfo } from "../TopicsList.jsx";
useStateTopicsInfo;
export const Example1 = () => {
	let value = "old value";

	const changeValue = () => {
		value = "new value";
	};
	return (
		<>
			<Header
				title={useStateTopicsInfo.example1.name}
				src={useStateTopicsInfo.example1.src}
			/>
			<p>Вот так в ванильном JS мы изменяли значение переменной:</p>
			<code className="code_block">let value = "old value"; </code>
			<code className="code_block">value = "new value";</code>
			<p>
				Теперь попробуй нажать на кнопку "Change value", она должна изменить
				значение
			</p>
			<button onClick={changeValue}>Change value</button>
			<p>Текущее значение переменной value:</p>
			<code>{value}</code>
			<p>Увы в React такие приемы не работают</p>
			<p>
				Это происходит потому, что такое изменение не запускает проверку
				виртуального DOM. Поэтому технически реакт не видит ничего что бы могло
				изменится и ререндер не происходит
			</p>
			<p>В следующих уроках вы узнаете как это исправить</p>
			<Link to={useStateTopicsInfo.example2.path}>Следующее задание</Link>
		</>
	);
};
