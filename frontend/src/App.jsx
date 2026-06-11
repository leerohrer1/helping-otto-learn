import { CirclePlus, Trash2 } from "lucide-react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ActionButton from "./components/ActionButton";
import TaskList from "./components/TaskList";

function App() {
  const handleAddTask = () => {
    console.log("Add Task");
  };

  const handleDeleteAll = () => {
    console.log("Delete All");
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col p-6">
      <Header />
      <SearchBar />
      <div className="mb-4 flex justify-center gap-3">
        <ActionButton
          label="Add Task"
          icon={CirclePlus}
          color="violet"
          actionFunction={handleAddTask}
        />
        <ActionButton
          label="Delete All"
          icon={Trash2}
          color="rose"
          actionFunction={handleDeleteAll}
        />
      </div>
      <TaskList />
    </main>
  );
}

export default App;
