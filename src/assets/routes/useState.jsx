import { createBrowserRouter } from "react-router-dom";
import App from "../../App.jsx";

import { Layout } from "../../components/Layout.jsx";
import {
	useEffectExamplesInfo,
	useEffectTrainingInfo,
} from "../../useEffect/UseEffectTopicsList.jsx";
import {
	useStateExamplesInfo,
	useStateTrainingInfo,
} from "../../useState/UseStateTopicsList.jsx";

const generateRoutes = (routesInfo) => {
	return routesInfo.map((item, i) => {
		const orderNumber = i + 1;
		const nextPageUrl =
			item.nextPageUrl || `${routesInfo[i]?.url}${orderNumber + 1}` || "/";
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
			...generateRoutes(useStateExamplesInfo),
			...generateRoutes(useStateTrainingInfo),
			...generateRoutes(useEffectExamplesInfo),
			...generateRoutes(useEffectTrainingInfo),
		],
	},
]);
