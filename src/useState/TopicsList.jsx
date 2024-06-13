import { Link } from "react-router-dom";
import { pathNames } from "../assets/routes/useState";

export const useStateTopicsInfo = {
	example: {
		example1: {
			name: "Проблема обновления примитивов",
			src: "/src/useState/examples/Example1.jsx",
		},
		example2: {
			name: "Правильное обновление примитивов",
			src: "/src/useState/examples/Example2.jsx",
		},
		example3: {
			name: "Проблема обновления объектов",
			src: "/src/useState/examples/Example3.jsx",
		},
		example4: {
			name: "Правильное обновление объектов",
			src: "/src/useState/examples/Example4.jsx",
		},
		example5: {
			name: "Проблема обновления массивов",
			src: "/src/useState/examples/Example5.jsx",
		},
		example6: {
			name: "Правильное обновление массивов",
			src: "/src/useState/examples/Example6.jsx",
		},
		example7: {
			name: "Общие сведения о useState",
			src: "/src/useState/examples/Example7.jsx",
		},
		example8: {
			name: "Удаление элемента из массива",
			src: "/src/useState/examples/Example8.jsx",
		},
		example9: {
			name: "Изменение элемента в массиве объектов",
			src: "/src/useState/examples/Example9.jsx",
		},
	},
};

export const UseStateTopicsList = () => {
	return (
		<>
			<h3>Теория</h3>
			<ul>
				<li>
					<Link to={pathNames.useState.example1}>
						{useStateTopicsInfo.example.example1.name}
					</Link>
				</li>
				<li>
					<Link to={pathNames.useState.example2}>
						{useStateTopicsInfo.example.example2.name}
					</Link>
				</li>
				<li>
					<Link to={pathNames.useState.example3}>
						{useStateTopicsInfo.example.example3.name}
					</Link>
				</li>
				<li>
					<Link to={pathNames.useState.example4}>
						{useStateTopicsInfo.example.example4.name}
					</Link>
				</li>
				<li>
					<Link to={pathNames.useState.example5}>
						{useStateTopicsInfo.example.example5.name}
					</Link>
				</li>
				<li>
					<Link to={pathNames.useState.example6}>
						{useStateTopicsInfo.example.example6.name}
					</Link>
				</li>
				<li>
					<Link to={pathNames.useState.example7}>
						{useStateTopicsInfo.example.example7.name}
					</Link>
				</li>
				<li>
					<Link to={pathNames.useState.example8}>
						{useStateTopicsInfo.example.example8.name}
					</Link>
				</li>
				<li>
					<Link to={pathNames.useState.example9}>
						{useStateTopicsInfo.example.example9.name}
					</Link>
				</li>
			</ul>
		</>
	);
};
