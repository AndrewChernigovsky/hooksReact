import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Test1 } from "./useState/Test1.jsx";
import { Test2 } from "./useState/Test2.jsx";

export const pathNames = {
	useState: { test1: "/useState-test-1", test2: "/useState-test-2" },
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
