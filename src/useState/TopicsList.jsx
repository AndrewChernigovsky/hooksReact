import { Link } from "react-router-dom";

export const useStateTopicsInfo = {
	example1: {
		name: "Проблема обновления примитивов",
		src: "/src/useState/examples/Example1.jsx",
		path: "/useState-example-1",
	},
	example2: {
		name: "Правильное обновление примитивов",
		src: "/src/useState/examples/Example2.jsx",
		path: "/useState-example-2",
	},
	example3: {
		name: "Проблема обновления объектов",
		src: "/src/useState/examples/Example3.jsx",
		path: "/useState-example-3",
	},
	example4: {
		name: "Правильное обновление объектов",
		src: "/src/useState/examples/Example4.jsx",
		path: "/useState-example-4",
	},
	example5: {
		name: "Проблема обновления массивов",
		src: "/src/useState/examples/Example5.jsx",
		path: "/useState-example-5",
	},
	example6: {
		name: "Правильное обновление массивов",
		src: "/src/useState/examples/Example6.jsx",
		path: "/useState-example-6",
	},
	example7: {
		name: "Общие сведения о useState",
		src: "/src/useState/examples/Example7.jsx",
		path: "/useState-example-7",
	},
	example8: {
		name: "Удаление элемента из массива",
		src: "/src/useState/examples/Example8.jsx",
		path: "/useState-example-8",
	},
	example9: {
		name: "Изменение элемента в массиве объектов",
		src: "/src/useState/examples/Example9.jsx",
		path: "/useState-example-9",
	},

	training1: {
		name: "Тренировочное задание 1",
		src: "/src/useState/training/Training1.jsx",
		path: "/useState-training-1",
	},
};

export const UseStateTopicsList = ({ currentPage }) => {
	return (
		<>
			<h3>UseState Теория</h3>
			<ul>
				<li>
					<Link
						to={useStateTopicsInfo.example1.path}
						style={{
							color: currentPage === useStateTopicsInfo.example1 && "#fff",
						}}
					>
						{useStateTopicsInfo.example1.name}
					</Link>
				</li>
				<li>
					<Link
						to={useStateTopicsInfo.example2.path}
						style={{
							color: currentPage === useStateTopicsInfo.example2.path && "#fff",
						}}
					>
						{useStateTopicsInfo.example2.name}
					</Link>
				</li>
				<li>
					<Link
						to={useStateTopicsInfo.example3.path}
						style={{
							color: currentPage === useStateTopicsInfo.example3.path && "#fff",
						}}
					>
						{useStateTopicsInfo.example3.name}
					</Link>
				</li>
				<li>
					<Link
						to={useStateTopicsInfo.example4.path}
						style={{
							color: currentPage === useStateTopicsInfo.example4.path && "#fff",
						}}
					>
						{useStateTopicsInfo.example4.name}
					</Link>
				</li>
				<li>
					<Link
						to={useStateTopicsInfo.example5.path}
						style={{
							color: currentPage === useStateTopicsInfo.example5.path && "#fff",
						}}
					>
						{useStateTopicsInfo.example5.name}
					</Link>
				</li>
				<li>
					<Link
						to={useStateTopicsInfo.example6.path}
						style={{
							color: currentPage === useStateTopicsInfo.example6.path && "#fff",
						}}
					>
						{useStateTopicsInfo.example6.name}
					</Link>
				</li>
				<li>
					<Link
						to={useStateTopicsInfo.example7.path}
						style={{
							color: currentPage === useStateTopicsInfo.example7.path && "#fff",
						}}
					>
						{useStateTopicsInfo.example7.name}
					</Link>
				</li>
				<li>
					<Link
						to={useStateTopicsInfo.example8.path}
						style={{
							color: currentPage === useStateTopicsInfo.example8.path && "#fff",
						}}
					>
						{useStateTopicsInfo.example8.name}
					</Link>
				</li>
				<li>
					<Link
						to={useStateTopicsInfo.example9.path}
						style={{
							color: currentPage === useStateTopicsInfo.example9.path && "#fff",
						}}
					>
						{useStateTopicsInfo.example9.name}
					</Link>
				</li>
			</ul>

			<h3>UseState Практика</h3>
			<ul>
				<li>
					<Link
						to={useStateTopicsInfo.training1.path}
						style={{
							color:
								currentPage === useStateTopicsInfo.training1.path && "#fff",
						}}
					>
						{useStateTopicsInfo.training1.name}
					</Link>
				</li>
			</ul>
		</>
	);
};
