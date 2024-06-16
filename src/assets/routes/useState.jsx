import { createBrowserRouter } from "react-router-dom";
import App from "../../App.jsx";

import { Layout } from "../../components/Layout.jsx";
import { useStateTopicsInfo } from "../../useState/TopicsList.jsx";
import { Example1 } from "../../useState/examples/Example1.jsx";
import { Example2 } from "../../useState/examples/Example2.jsx";
import { Example3 } from "../../useState/examples/Example3.jsx";
import { Example4 } from "../../useState/examples/Example4.jsx";
import { Example5 } from "../../useState/examples/Example5.jsx";
import { Example6 } from "../../useState/examples/Example6.jsx";
import { Example7 } from "../../useState/examples/Example7.jsx";
import { Example8 } from "../../useState/examples/Example8.jsx";
import { Example9 } from "../../useState/examples/Example9.jsx";
import { Training1 } from "../../useState/training/Training1.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <App />,
			},
			{
				path: useStateTopicsInfo.example1.path,
				element: <Example1 />,
			},
			{
				path: useStateTopicsInfo.example2.path,
				element: <Example2 />,
			},
			{
				path: useStateTopicsInfo.example3.path,
				element: <Example3 />,
			},
			{
				path: useStateTopicsInfo.example4.path,
				element: <Example4 />,
			},
			{
				path: useStateTopicsInfo.example5.path,
				element: <Example5 />,
			},
			{
				path: useStateTopicsInfo.example6.path,
				element: <Example6 />,
			},
			{
				path: useStateTopicsInfo.example7.path,
				element: <Example7 />,
			},
			{
				path: useStateTopicsInfo.example8.path,
				element: <Example8 />,
			},
			{
				path: useStateTopicsInfo.example9.path,
				element: <Example9 />,
			},
			{
				path: useStateTopicsInfo.training1.path,
				element: <Training1 />,
			},
		],
	},
]);
