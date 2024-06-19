import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../Header";

export const UseEffectExample4 = ({ title, srcPath, nextPageUrl }) => {
	const [otherState, setOtherState] = useState(0);

	const savedPhoto = JSON.parse(localStorage.getItem("photosInfo"));
	const [photo, setPhoto] = useState(savedPhoto);

	const [photoId, setPhotoId] = useState(1);

	const changeValue = () => {
		const randomNumber = Math.random();
		setOtherState(randomNumber);
	};

	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	const changephotoId = () => {
		const randomId = getRandomNumber(1, 100);
		setPhotoId(randomId);
	};

	useEffect(() => {
		const getPhotos = async () => {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/photos/${photoId}`,
			);
			if (response.ok) {
				const photoInfo = await response.json();
				localStorage.setItem("photosInfo", JSON.stringify(photoInfo));
				setPhoto(photoInfo);
			}
		};

		getPhotos();
	}, [photoId]);

	return (
		<div>
			<Header title={title} src={srcPath} />
			<p>
				Теперь мы хотим не просто получать первую картинку, а какую-то
				конкретную, например каждый раз случайную
			</p>
			<p>
				Для этого мы можем подписаться на изменение переменной, добавив эту
				переменную в массив зависимостей для useEffect
			</p>
			<p>
				Мы подписываемся на <code>photoId</code> картинки которую хотим
				получать, а на useEffect сделает остальную работу за нас
			</p>

			<button onClick={changeValue}>
				Изменить другое значение, не относящееся к фотографии
			</button>
			<p>
				Значение другого состояния:
				<code>{otherState}</code>
			</p>
			<button onClick={changephotoId}>Изменить photoId</button>
			<p>
				Текущий photoId:
				<code>{photoId}</code>
			</p>
			<p>
				Как видишь запросы на сервер не отправляются, если мы меняем другое
				значение, но как только мы меняем <code>photoId</code> useEffect видит
				изменение этой переменной и выполняет функцию внутри себя, которая и
				запрашивает новую фотографию
			</p>

			<div style={{ width: 150, height: 150 }}>
				<img src={photo.thumbnailUrl} alt={photo.title} key={photo.id} />
			</div>

			<Link to={nextPageUrl}>Рассмотрим переменные для useEffect</Link>
		</div>
	);
};
