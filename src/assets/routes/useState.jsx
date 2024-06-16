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
import { Training2 } from "../../useState/training/Training2.jsx";

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
				path: useStateTopicsInfo.example1.url,
				element: (
					<Example1
						title={useStateTopicsInfo.example1.title}
						srcPath={useStateTopicsInfo.example1.srcPath}
						nextPageUrl={useStateTopicsInfo.example2.url}
					/>
				),
			},
			{
				path: useStateTopicsInfo.example2.url,
				element: (
					<Example2
						title={useStateTopicsInfo.example2.title}
						srcPath={useStateTopicsInfo.example2.srcPath}
						nextPageUrl={useStateTopicsInfo.example3.url}
					/>
				),
			},
			{
				path: useStateTopicsInfo.example3.url,
				element: (
					<Example3
						title={useStateTopicsInfo.example3.title}
						srcPath={useStateTopicsInfo.example3.srcPath}
						nextPageUrl={useStateTopicsInfo.example4.url}
					/>
				),
			},
			{
				path: useStateTopicsInfo.example4.url,
				element: (
					<Example4
						title={useStateTopicsInfo.example4.title}
						srcPath={useStateTopicsInfo.example4.srcPath}
						nextPageUrl={useStateTopicsInfo.example5.url}
					/>
				),
			},
			{
				path: useStateTopicsInfo.example5.url,
				element: (
					<Example5
						title={useStateTopicsInfo.example5.title}
						srcPath={useStateTopicsInfo.example5.srcPath}
						nextPageUrl={useStateTopicsInfo.example6.url}
					/>
				),
			},
			{
				path: useStateTopicsInfo.example6.url,
				element: (
					<Example6
						title={useStateTopicsInfo.example6.title}
						srcPath={useStateTopicsInfo.example6.srcPath}
						nextPageUrl={useStateTopicsInfo.example7.url}
					/>
				),
			},
			{
				path: useStateTopicsInfo.example7.url,
				element: (
					<Example7
						title={useStateTopicsInfo.example7.title}
						srcPath={useStateTopicsInfo.example7.srcPath}
						nextPageUrl={useStateTopicsInfo.example8.url}
					/>
				),
			},
			{
				path: useStateTopicsInfo.example8.url,
				element: (
					<Example8
						title={useStateTopicsInfo.example8.title}
						srcPath={useStateTopicsInfo.example8.srcPath}
						nextPageUrl={useStateTopicsInfo.example9.url}
					/>
				),
			},
			{
				path: useStateTopicsInfo.example9.url,
				element: (
					<Example9
						title={useStateTopicsInfo.example9.title}
						srcPath={useStateTopicsInfo.example9.srcPath}
						nextPageUrl={useStateTopicsInfo.training1.url}
					/>
				),
			},
			{
				path: useStateTopicsInfo.training1.url,
				element: (
					<Training1
						title={useStateTopicsInfo.training1.title}
						srcPath={useStateTopicsInfo.training1.srcPath}
						nextPageUrl={useStateTopicsInfo.training2.url}
					/>
				),
			},
			{
				path: useStateTopicsInfo.training2.url,
				element: (
					<Training2
						title={useStateTopicsInfo.training2.title}
						srcPath={useStateTopicsInfo.training2.srcPath}
						nextPageUrl="/"
					/>
				),
			},
		],
	},
]);
