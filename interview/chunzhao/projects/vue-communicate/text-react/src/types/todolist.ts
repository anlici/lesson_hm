
export interface TodoItemProps {
    id: number;
    name : string;
    completed: boolean;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

