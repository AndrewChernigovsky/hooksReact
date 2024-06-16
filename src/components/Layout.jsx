import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";

export const Layout = () => {
	return (
		<div className="page_wrapper">
			<Sidebar />
			<div>
				<Outlet />
			</div>
		</div>
	);
};
