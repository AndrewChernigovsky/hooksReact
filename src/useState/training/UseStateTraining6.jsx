import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../Header";

export const UseStateTraining6 = ({ title, srcPath, nextPageUrl }) => {
	const [technologiesInfo, setTechnologiesInfo] = useState([
		{
			basedOn: "JavaScript",
			technologies: ["JavaScrpt", "TypeScript", "NodeJS"],
		},
		{ basedOn: "CSS", technologies: ["CSS", "SCSS", "React", "SASS"] },
	]);

	const changeValue = () => {
		//Ваш код здесь
	};

	return (
		<div>
			<Header title={title} src={srcPath} />
			<p>
				Вам необходимо удалить <code>React</code> в массив технологий основанных
				на CSS
			</p>

			<button onClick={changeValue}>Change value</button>
			<p>Текущее значение состояния: </p>
			<div>
				{technologiesInfo.map((technologieInfo) => {
					return (
						<div key={technologieInfo.basedOn}>
							<p className="code_block">
								Онсовано на: {technologieInfo.basedOn}
							</p>
							<div>
								{technologieInfo.technologies.map((technologie) => {
									return <code key={technologie}>{technologie}</code>;
								})}
							</div>
						</div>
					);
				})}
			</div>
			<Link to={nextPageUrl}>Следующее задание</Link>
		</div>
	);
};
