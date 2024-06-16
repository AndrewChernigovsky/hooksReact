import { Link } from "react-router-dom";

export const useStateTopicsInfo = {
	example1: {
		title: "Проблема обновления примитивов",
		srcPath: "/src/useState/examples/Example1.jsx",
		url: "/useState-example-1",
	},
	example2: {
		title: "Правильное обновление примитивов",
		srcPath: "/src/useState/examples/Example2.jsx",
		url: "/useState-example-2",
	},
	example3: {
		title: "Проблема обновления объектов",
		srcPath: "/src/useState/examples/Example3.jsx",
		url: "/useState-example-3",
	},
	example4: {
		title: "Правильное обновление объектов",
		srcPath: "/src/useState/examples/Example4.jsx",
		url: "/useState-example-4",
	},
	example5: {
		title: "Проблема обновления массивов",
		srcPath: "/src/useState/examples/Example5.jsx",
		url: "/useState-example-5",
	},
	example6: {
		title: "Правильное обновление массивов",
		srcPath: "/src/useState/examples/Example6.jsx",
		url: "/useState-example-6",
	},
	example7: {
		title: "Общие сведения о useState",
		srcPath: "/src/useState/examples/Example7.jsx",
		url: "/useState-example-7",
	},
	example8: {
		title: "Удаление элемента из массива",
		srcPath: "/src/useState/examples/Example8.jsx",
		url: "/useState-example-8",
	},
	example9: {
		title: "Изменение элемента в массиве объектов",
		srcPath: "/src/useState/examples/Example9.jsx",
		url: "/useState-example-9",
	},

	training1: {
		title: "Тренировочное задание 1",
		srcPath: "/src/useState/training/Training1.jsx",
		url: "/useState-training-1",
	},
	training2: {
		title: "Тренировочное задание 2",
		srcPath: "/src/useState/training/Training2.jsx",
		url: "/useState-training-2",
	},
};

export const UseStateTopicsList = ({ currentPage }) => {
	return (
		<>
			<h3>UseState Теория</h3>
			<ul>
				<li>
					<Link
						to={useStateTopicsInfo.example1.url}
						style={{
							color: currentPage === useStateTopicsInfo.example1.url && "#fff",
						}}
					>
						{useStateTopicsInfo.example1.title}
					</Link>
				</li>
				<li>
					<Link
						to={useStateTopicsInfo.example2.url}
						style={{
							color: currentPage === useStateTopicsInfo.example2.url && "#fff",
						}}
					>
						{useStateTopicsInfo.example2.title}
					</Link>
				</li>
				<li>
					<Link
						to={useStateTopicsInfo.example3.url}
						style={{
							color: currentPage === useStateTopicsInfo.example3.url && "#fff",
						}}
					>
						{useStateTopicsInfo.example3.title}
					</Link>
				</li>
				<li>
					<Link
						to={useStateTopicsInfo.example4.url}
						style={{
							color: currentPage === useStateTopicsInfo.example4.url && "#fff",
						}}
					>
						{useStateTopicsInfo.example4.title}
					</Link>
				</li>
				<li>
					<Link
						to={useStateTopicsInfo.example5.url}
						style={{
							color: currentPage === useStateTopicsInfo.example5.url && "#fff",
						}}
					>
						{useStateTopicsInfo.example5.title}
					</Link>
				</li>
				<li>
					<Link
						to={useStateTopicsInfo.example6.url}
						style={{
							color: currentPage === useStateTopicsInfo.example6.url && "#fff",
						}}
					>
						{useStateTopicsInfo.example6.title}
					</Link>
				</li>
				<li>
					<Link
						to={useStateTopicsInfo.example7.url}
						style={{
							color: currentPage === useStateTopicsInfo.example7.url && "#fff",
						}}
					>
						{useStateTopicsInfo.example7.title}
					</Link>
				</li>
				<li>
					<Link
						to={useStateTopicsInfo.example8.url}
						style={{
							color: currentPage === useStateTopicsInfo.example8.url && "#fff",
						}}
					>
						{useStateTopicsInfo.example8.title}
					</Link>
				</li>
				<li>
					<Link
						to={useStateTopicsInfo.example9.url}
						style={{
							color: currentPage === useStateTopicsInfo.example9.url && "#fff",
						}}
					>
						{useStateTopicsInfo.example9.title}
					</Link>
				</li>
			</ul>

			<h3>UseState Практика</h3>
			<ul>
				<li>
					<Link
						to={useStateTopicsInfo.training1.url}
						style={{
							color: currentPage === useStateTopicsInfo.training1.url && "#fff",
						}}
					>
						{useStateTopicsInfo.training1.title}
					</Link>
				</li>
				<li>
					<Link
						to={useStateTopicsInfo.training2.url}
						style={{
							color: currentPage === useStateTopicsInfo.training2.url && "#fff",
						}}
					>
						{useStateTopicsInfo.training2.title}
					</Link>
				</li>
			</ul>
		</>
	);
};
