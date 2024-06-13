import { Link } from "react-router-dom";
import { Header } from "../../Header.jsx";
import { pathNames } from "../../assets/routes/useState.jsx";
import { useStateTopicsInfo } from "../TopicsList.jsx";

export const Example7 = () => {
	return (
		<div>
			<Header
				title={useStateTopicsInfo.example.example7.name}
				src={useStateTopicsInfo.example.example7.src}
			/>
			<p>
				Основная идея состоит в том, что мы не можем менять / добавлять /
				редактировать один элемент, нам ОБЯЗАТЕЛЬНО нужно сделать ПОЛНУЮ его
				копию и дополнительно сделать свою операцию
			</p>
			<p>
				В наших примерах с объектом и массивом мы копировали весь старый объект
				или массив через spread (<code>...</code>) оператор, а далее добавляли
				новый элемент следом за скопированным элементом
			</p>
			<p>
				К этому моменту у вас должны быть крепкие знания JavaScript и понимание
				его работы, так как далее мы будем делать более сложные вещи и следует
				понимать как это будет работать
			</p>

			<Link to={pathNames.useState.example8}>Изменение массива объектов</Link>
		</div>
	);
};
