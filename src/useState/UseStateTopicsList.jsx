import { Link } from "react-router-dom";
import { UseStateExample1 } from "./examples/UseStateExample1.jsx";
import { UseStateExample2 } from "./examples/UseStateExample2.jsx";
import { UseStateExample3 } from "./examples/UseStateExample3.jsx";
import { UseStateExample4 } from "./examples/UseStateExample4.jsx";
import { UseStateExample5 } from "./examples/UseStateExample5.jsx";
import { UseStateExample6 } from "./examples/UseStateExample6.jsx";
import { UseStateExample7 } from "./examples/UseStateExample7.jsx";
import { UseStateExample8 } from "./examples/UseStateExample8.jsx";
import { UseStateExample9 } from "./examples/UseStateExample9.jsx";
import { UseStateExample10 } from "./examples/UseStateExample10.jsx";
import { UseStateExample11 } from "./examples/UseStateExample11.jsx";
import { UseStateTraining1 } from "./training/UseStateTraining1.jsx";
import { UseStateTraining2 } from "./training/UseStateTraining2.jsx";
import { UseStateTraining3 } from "./training/UseStateTraining3.jsx";
import { UseStateTraining4 } from "./training/UseStateTraining4.jsx";
import { UseStateTraining5 } from "./training/UseStateTraining5.jsx";
import { UseStateTraining6 } from "./training/UseStateTraining6.jsx";
import { UseStateTraining7 } from "./training/UseStateTraining7.jsx";

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
 * например: nextPageUrl: "/useState-training-1",
 */
const exampleUrl = "/useState-example-";
export const useStateExamplesInfo = [
	{
		title: "Проблема обновления примитивов",
		srcPath: "/src/useState/examples/UseStateExample1.jsx",
		url: exampleUrl,
		component: UseStateExample1,
	},
	{
		title: "Правильное обновление примитивов",
		srcPath: "/src/useState/examples/UseStateExample2.jsx",
		url: exampleUrl,
		component: UseStateExample2,
	},
	{
		title: "Проблема обновления объектов",
		srcPath: "/src/useState/examples/UseStateExample3.jsx",
		url: exampleUrl,
		component: UseStateExample3,
	},
	{
		title: "Правильное обновление объектов",
		srcPath: "/src/useState/examples/UseStateExample4.jsx",
		url: exampleUrl,
		component: UseStateExample4,
	},
	{
		title: "Проблема обновления массивов",
		srcPath: "/src/useState/examples/UseStateExample5.jsx",
		url: exampleUrl,
		component: UseStateExample5,
	},
	{
		title: "Правильное обновление массивов",
		srcPath: "/src/useState/examples/UseStateExample6.jsx",
		url: exampleUrl,
		component: UseStateExample6,
	},
	{
		title: "Общие сведения о useState",
		srcPath: "/src/useState/examples/UseStateExample7.jsx",
		url: exampleUrl,
		component: UseStateExample7,
	},
	{
		title: "Удаление элемента из массива",
		srcPath: "/src/useState/examples/UseStateExample8.jsx",
		url: exampleUrl,
		component: UseStateExample8,
	},
	{
		title: "Изменение элемента в массиве объектов",
		srcPath: "/src/useState/examples/UseStateExample9.jsx",
		url: exampleUrl,
		component: UseStateExample9,
	},
	{
		title: "Работа с булевыми значениями",
		srcPath: "/src/useState/examples/UseStateExample10.jsx",
		url: exampleUrl,
		component: UseStateExample10,
	},
	{
		title: "Еще один нюанс при работе с useState",
		srcPath: "/src/useState/examples/UseStateExample11.jsx",
		url: exampleUrl,
		nextPageUrl: "/useState-training-1",
		component: UseStateExample11,
	},
];

const trainingUrl = "/useState-training-";
export const useStateTrainingInfo = [
	{
		title: "Тренировочное задание 1",
		srcPath: "/src/useState/training/UseStateTraining1.jsx",
		url: trainingUrl,
		component: UseStateTraining1,
	},
	{
		title: "Тренировочное задание 2",
		srcPath: "/src/useState/training/UseStateTraining2.jsx",
		url: trainingUrl,
		component: UseStateTraining2,
	},
	{
		title: "Тренировочное задание 3",
		srcPath: "/src/useState/training/UseStateTraining3.jsx",
		url: trainingUrl,
		component: UseStateTraining3,
	},
	{
		title: "Тренировочное задание 4",
		srcPath: "/src/useState/training/UseStateTraining4.jsx",
		url: trainingUrl,
		component: UseStateTraining4,
	},
	{
		title: "Тренировочное задание 5",
		srcPath: "/src/useState/training/UseStateTraining5.jsx",
		url: trainingUrl,
		component: UseStateTraining5,
	},
	{
		title: "Тренировочное задание 6",
		srcPath: "/src/useState/training/UseStateTraining6.jsx",
		url: trainingUrl,
		component: UseStateTraining6,
	},
	{
		title: "Тренировочное задание 7",
		srcPath: "/src/useState/training/UseStateTraining7.jsx",
		url: trainingUrl,
		component: UseStateTraining7,
		nextPageUrl: "/useEffect-example-1",
	},
];

export const UseStateTopicsList = ({ currentPage }) => {
	return (
		<>
			<h3>UseState Теория</h3>
			<ul>
				{useStateExamplesInfo.map((item, i) => {
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

			<h3>UseState Практика</h3>
			<ul>
				{useStateTrainingInfo.map((item, i) => {
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
