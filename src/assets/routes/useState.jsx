import { createBrowserRouter } from "react-router-dom";
import App from "../../App.jsx";

import { Layout } from "../../components/Layout.jsx";
import { Example1 } from "../../useState/examples/Example1.jsx";
import { Example2 } from "../../useState/examples/Example2.jsx";
import { Example3 } from "../../useState/examples/Example3.jsx";
import { Example4 } from "../../useState/examples/Example4.jsx";
import { Example5 } from "../../useState/examples/Example5.jsx";
import { Example6 } from "../../useState/examples/Example6.jsx";
import { Example7 } from "../../useState/examples/Example7.jsx";
import { Example8 } from "../../useState/examples/Example8.jsx";
import { Example9 } from "../../useState/examples/Example9.jsx";

export const pathNames = {
	useState: {
		example1: "/useState-example-1",
		example2: "/useState-example-2",
		example3: "/useState-example-3",
		example4: "/useState-example-4",
		example5: "/useState-example-5",
		example6: "/useState-example-6",
		example7: "/useState-example-7",
		example8: "/useState-example-8",
		example9: "/useState-example-9",
	},
};

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
				path: pathNames.useState.example1,
				element: <Example1 />,
			},
			{
				path: pathNames.useState.example2,
				element: <Example2 />,
			},
			{
				path: pathNames.useState.example3,
				element: <Example3 />,
			},
			{
				path: pathNames.useState.example4,
				element: <Example4 />,
			},
			{
				path: pathNames.useState.example5,
				element: <Example5 />,
			},
			{
				path: pathNames.useState.example6,
				element: <Example6 />,
			},
			{
				path: pathNames.useState.example7,
				element: <Example7 />,
			},
			{
				path: pathNames.useState.example8,
				element: <Example8 />,
			},
			{
				path: pathNames.useState.example9,
				element: <Example9 />,
			},
		],
	},
]);
