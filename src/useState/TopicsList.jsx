import { Link } from "react-router-dom";
import { Example1 } from "../useState/examples/Example1.jsx";
import { Example2 } from "../useState/examples/Example2.jsx";
import { Example3 } from "../useState/examples/Example3.jsx";
import { Example4 } from "../useState/examples/Example4.jsx";
import { Example5 } from "../useState/examples/Example5.jsx";
import { Example6 } from "../useState/examples/Example6.jsx";
import { Example7 } from "../useState/examples/Example7.jsx";
import { Example8 } from "../useState/examples/Example8.jsx";
import { Example9 } from "../useState/examples/Example9.jsx";
import { Training1 } from "./training/Training1.jsx";
import { Training2 } from "./training/Training2.jsx";
import { Training3 } from "./training/Training3.jsx";
import { Training4 } from "./training/Training4.jsx";
import { Training5 } from "./training/Training5.jsx";
import { Training6 } from "./training/Training6.jsx";
import { Training7 } from "./training/Training7.jsx";

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
const examleUrl = "/useState-example-";
export const useStateExamplesInfo = [
	{
		title: "Проблема обновления примитивов",
		srcPath: "/src/useState/examples/Example1.jsx",
		url: examleUrl,
		component: Example1,
	},
	{
		title: "Правильное обновление примитивов",
		srcPath: "/src/useState/examples/Example2.jsx",
		url: examleUrl,
		component: Example2,
	},
	{
		title: "Проблема обновления объектов",
		srcPath: "/src/useState/examples/Example3.jsx",
		url: examleUrl,
		component: Example3,
	},
	{
		title: "Правильное обновление объектов",
		srcPath: "/src/useState/examples/Example4.jsx",
		url: examleUrl,
		component: Example4,
	},
	{
		title: "Проблема обновления массивов",
		srcPath: "/src/useState/examples/Example5.jsx",
		url: examleUrl,
		component: Example5,
	},
	{
		title: "Правильное обновление массивов",
		srcPath: "/src/useState/examples/Example6.jsx",
		url: examleUrl,
		component: Example6,
	},
	{
		title: "Общие сведения о useState",
		srcPath: "/src/useState/examples/Example7.jsx",
		url: examleUrl,
		component: Example7,
	},
	{
		title: "Удаление элемента из массива",
		srcPath: "/src/useState/examples/Example8.jsx",
		url: examleUrl,
		component: Example8,
	},
	{
		title: "Изменение элемента в массиве объектов",
		srcPath: "/src/useState/examples/Example9.jsx",
		url: examleUrl,
		nextPageUrl: "/useState-training-1",
		component: Example9,
	},
];

const trainingUrl = "/useState-training-";
export const useStateTrainingInfo = [
	{
		title: "Тренировочное задание 1",
		srcPath: "/src/useState/training/Training1.jsx",
		url: trainingUrl,
		component: Training1,
	},
	{
		title: "Тренировочное задание 2",
		srcPath: "/src/useState/training/Training2.jsx",
		url: trainingUrl,
		component: Training2,
	},
	{
		title: "Тренировочное задание 3",
		srcPath: "/src/useState/training/Training3.jsx",
		url: trainingUrl,
		component: Training3,
	},
	{
		title: "Тренировочное задание 4",
		srcPath: "/src/useState/training/Training4.jsx",
		url: trainingUrl,
		component: Training4,
	},
	{
		title: "Тренировочное задание 5",
		srcPath: "/src/useState/training/Training5.jsx",
		url: trainingUrl,
		component: Training5,
	},
	{
		title: "Тренировочное задание 6",
		srcPath: "/src/useState/training/Training6.jsx",
		url: trainingUrl,
		component: Training6,
	},
	{
		title: "Тренировочное задание 7",
		srcPath: "/src/useState/training/Training7.jsx",
		url: trainingUrl,
		component: Training7,
		nextPageUrl: "/",
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
