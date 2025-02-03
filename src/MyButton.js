export default function MyButton(props) {
  const { todos, onDelete } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => onDelete(todo.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
}
