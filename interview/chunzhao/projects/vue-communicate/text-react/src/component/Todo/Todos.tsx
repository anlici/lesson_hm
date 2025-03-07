import React from 'react';

interface TodoItemProps {
  id: number;
  name: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const Todos:React.FC<TodoItemProps> = ({ id, name, completed, onDelete, onToggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {name}
      </span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};
export default Todos;