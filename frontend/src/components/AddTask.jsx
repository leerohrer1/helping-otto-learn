import { CirclePlus } from "lucide-react";

function AddTask() {
  const handleAddTask = () => {
    console.log("Add Task");
  };

  return (
    <button
      type="button"
      onClick={handleAddTask}
      className="inline-flex items-center gap-2 rounded-md border border-violet-300 bg-violet-50 px-3 py-2 text-sm font-medium text-violet-700 hover:bg-violet-100"
    >
      <CirclePlus size={14} aria-hidden="true" />
      Add Task
    </button>
  );
}

export default AddTask;
