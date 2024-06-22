export const Header = ({ title, src }) => {
  return (
    <>
      <h2>{title}</h2>
      <span>Код этого файла можно найти в файле:</span> <code>{src}</code>
    </>
  );
};