export function Todos(props) {
  const {status, title } = props;
  return (
      <li>
        <span>{title}</span> <span>{status}</span>
      </li>
  );
}
