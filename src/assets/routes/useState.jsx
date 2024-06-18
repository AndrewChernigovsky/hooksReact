import { createBrowserRouter } from "react-router-dom";
import App from "../../App.jsx";

import { Layout } from "../../components/Layout.jsx";
import {
	useStateExamplesInfo,
	useStateTrainingInfo,
} from "../../useState/TopicsList.jsx";

const useStateExamplesRoutes = useStateExamplesInfo.map((item, i) => {
	const orderNumber = i + 1;
	const nextPageUrl =
		item.nextPageUrl ||
		`${useStateExamplesInfo[i]?.url}${orderNumber + 1}` ||
		"/";

	return {
		path: item.url + orderNumber,
		element: (
			<item.component
				key={item.title}
				title={item.title}
				srcPath={item.srcPath}
				nextPageUrl={nextPageUrl}
			/>
		),
	};
});

const useStateTrainingRoutes = useStateTrainingInfo.map((item, i) => {
	const orderNumber = i + 1;
	const nextPageUrl =
		item.nextPageUrl ||
		`${useStateTrainingInfo[i]?.url}${orderNumber + 1}` ||
		"/";
	return {
		path: item.url + orderNumber,
		element: (
			<item.component
				key={item.title}
				title={item.title}
				srcPath={item.srcPath}
				nextPageUrl={nextPageUrl}
			/>
		),
	};
});

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <App />,
			},
			...useStateExamplesRoutes,
			...useStateTrainingRoutes,
		],
	},
]);
