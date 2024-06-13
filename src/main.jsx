import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Test1 } from "./useState/Test1.jsx";
import { Test2 } from "./useState/Test2.jsx";
import { Test3 } from "./useState/Test3.jsx";
import { Test4 } from "./useState/Test4.jsx";
import { Test5 } from "./useState/Test5.jsx";
import { Test6 } from "./useState/Test6.jsx";

export const pathNames = {
	useState: {
		test1: "/useState-test-1",
		test2: "/useState-test-2",
		test3: "/useState-test-3",
		test4: "/useState-test-4",
		test5: "/useState-test-5",
		test6: "/useState-test-6",
	},
};
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: pathNames.useState.test1,
		element: <Test1 />,
	},
	{
		path: pathNames.useState.test2,
		element: <Test2 />,
	},
	{
		path: pathNames.useState.test3,
		element: <Test3 />,
	},
	{
		path: pathNames.useState.test4,
		element: <Test4 />,
	},
	{
		path: pathNames.useState.test5,
		element: <Test5 />,
	},
	{
		path: pathNames.useState.test6,
		element: <Test6 />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
