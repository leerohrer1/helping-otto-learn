import { Trash2 } from "lucide-react";

function DeleteAll() {
  const handleDeleteAll = () => {
    console.log("Delete All");
  };

  return (
    <button
      type="button"
      onClick={handleDeleteAll}
      className="inline-flex items-center gap-2 rounded-md border border-rose-300 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700 hover:bg-rose-100"
    >
      <Trash2 size={14} aria-hidden="true" />
      Delete All
    </button>
  );
}

export default DeleteAll;
