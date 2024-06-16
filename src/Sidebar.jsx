import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UseStateTopicsList } from "./useState/TopicsList";

export const Sidebar = () => {
	const { pathname } = useLocation();
	const [currentPage, setCurrentPage] = useState(pathname);

	useEffect(() => {
		setCurrentPage(pathname);
	}, [pathname]);

	return (
		<div
			style={{
				padding: 10,
				marginRight: 10,
				borderRight: "2px solid #fff",
				height: "98vh",
				width: 320,
				minWidth: 320,
			}}
		>
			<Link
				to="/"
				style={{
					color: currentPage === "/" && "#fff",
				}}
			>
				Главная
			</Link>
			<UseStateTopicsList currentPage={currentPage} />
		</div>
	);
};
