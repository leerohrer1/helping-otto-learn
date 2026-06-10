import { Square } from "lucide-react";

function TaskItem({ children }) {
  return (
    <li className="flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm">
      <Square size={16} aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

export default TaskItem;
