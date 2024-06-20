import { Link } from "react-router-dom";
import { UseEffectExample1 } from "./examples/UseEffectExample1.jsx";
import { UseEffectExample2 } from "./examples/UseEffectExample2.jsx";
import { UseEffectExample3 } from "./examples/UseEffectExample3.jsx";
import { UseEffectExample4 } from "./examples/UseEffectExample4.jsx";
import { UseEffectTraining1 } from "./training/UseEffectTraining1.jsx";

/**
 * Что бы добавить новую страницу нужно добавить объект в существующий массив
 * url строить на основании порядка элементов, ЭТО ВАЖНО
 * все завязано на индексах и порядке элементов
 *
 * Что бы добавить новые страницы, создайте отдельный объект с информацией
 * Что бы роутинг заработал вам так же нужно добавить эту информацию в router объект
 *
 * Если следующая страница имеет другой адрес, который отличается не только порядковым номером
 * вы можете указать это как отдельный роут, система роутингов поймет что адрес уже не порядковый
 * например: nextPageUrl: "/useEffect-training-1",
 */
const examleUrl = "/useEffect-example-";
export const useEffectExamplesInfo = [
	{
		title: "Введение в useEffect",
		srcPath: "/src/useEffect/examples/UseEffectExample1.jsx",
		url: examleUrl,
		component: UseEffectExample1,
	},
	{
		title: "useEffect базовый пример",
		srcPath: "/src/useEffect/examples/UseEffectExample2.jsx",
		url: examleUrl,
		component: UseEffectExample2,
	},
	{
		title: "useEffect практический пример",
		srcPath: "/src/useEffect/examples/UseEffectExample3.jsx",
		url: examleUrl,
		component: UseEffectExample3,
	},
	{
		title: "useEffect слежка за переменными",
		srcPath: "/src/useEffect/examples/UseEffectExample4.jsx",
		url: examleUrl,
		component: UseEffectExample4,
		nextPageUrl: "/useEffect-training-1",
	},
];

const trainingUrl = "/useEffect-training-";
export const useEffectTrainingInfo = [
	{
		title: "Тренировочное задание 1",
		srcPath: "/src/useEffect/examples/UseEffectTraining1.jsx",
		url: trainingUrl,
		component: UseEffectTraining1,
	},
];

export const UseEffectTopicsList = ({ currentPage }) => {
	return (
		<>
			<h3>useEffect Теория</h3>
			<ul>
				{useEffectExamplesInfo.map((item, i) => {
					const orderNumber = i + 1;

					return (
						<li key={item.title}>
							<Link
								to={item.url + orderNumber}
								style={{
									color: currentPage === item.url + orderNumber && "#fff",
								}}
							>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>

			<h3>useEffect Практика</h3>
			<ul>
				{useEffectTrainingInfo.map((item, i) => {
					const orderNumber = i + 1;

					return (
						<li key={item.title}>
							<Link
								to={item.url + orderNumber}
								style={{
									color: currentPage === item.url + orderNumber && "#fff",
								}}
							>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};
