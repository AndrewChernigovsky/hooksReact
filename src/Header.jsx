export const Header = ({ title, src }) => {
	return (
		<>
			<h2>{title}</h2>
			<p>Код этого файла можно найти в файле:</p>
			<code>{src}</code>
		</>
	);
};
