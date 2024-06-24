import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../Header";

export const UseEffectExample3 = ({ title, srcPath, nextPageUrl }) => {
	const [otherState, setOtherState] = useState(0);
	const savedPhoto = JSON.parse(localStorage.getItem("photosInfo") || "{}");
	const [photo, setPhoto] = useState(savedPhoto);

	const changeValue = () => {
		const randomNumber = Math.random();
		setOtherState(randomNumber);
	};

	useEffect(() => {
		const getPhotos = async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/photos/1",
			);
			if (response.ok) {
				const photoInfo = await response.json();
				localStorage.setItem("photosInfo", JSON.stringify(photoInfo));
				setPhoto(photoInfo);
			}
		};

		getPhotos();
	}, []);

	return (
		<div>
			<Header title={title} src={srcPath} />
			<p>
				Стандартная ситуация, это когда мы хотим получить какие-то данные в
				момент загрузки страницы
			</p>
			<p>
				useEffect это то что нам нужно, мы не хотим делать запрос на сервер
				каждый раз когда что-то произошло не связанное с нашими данными
			</p>
			<p>
				Дождись загрузки картинки и попробуй понажимать на кнопку, которая
				меняет другое состояние, не относящееся к фотографиям
			</p>

			<button onClick={changeValue}>Change value</button>
			<p>
				Значение состояния:
				<code>{otherState}</code>
			</p>
			<p>
				Как видишь запросы на сервер больше не отправляются, так как он
				выполняется только при первом рендере компоненета, а далее мы берем ее
				уже из нашего локального хранилища, что бы не перезапрашивать ее снова
			</p>

			<div style={{ width: 150, height: 150 }}>
				<img src={photo.thumbnailUrl} alt={photo.title} />
			</div>

			<Link to={nextPageUrl}>Рассмотрим переменные для useEffect</Link>
		</div>
	);
};
