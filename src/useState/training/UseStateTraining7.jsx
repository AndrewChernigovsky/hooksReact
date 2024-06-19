import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../Header";

export const UseStateTraining7 = ({ title, srcPath, nextPageUrl }) => {
	const [technologiesInfo, setTechnologiesInfo] = useState([
		{
			basedOn: "JavaScript",
			technologies: [
				{ name: "JavaScrpt", isKnowIt: true },
				{ name: "TypeScript", isKnowIt: false },
				{ name: "NodeJS", isKnowIt: false },
				{ name: "React", isKnowIt: false },
			],
		},
		{
			basedOn: "CSS",
			technologies: [
				{ name: "CSS", isKnowIt: true },
				{ name: "SCSS", isKnowIt: true },
				{ name: "SASS", isKnowIt: true },
			],
		},
	]);

	const changeValue = () => {
		//Ваш код здесь
	};

	return (
		<div>
			<Header title={title} src={srcPath} />
			<p>
				Вам необходимо поменять значение <code>isKnowIt</code> на true
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
									return (
										<code
											key={technologie.name}
											style={{ color: technologie.isKnowIt ? "green" : "red" }}
										>
											{technologie.name}
										</code>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
			<Link to={nextPageUrl}>изучить useEffect</Link>
		</div>
	);
};
