import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AddTask from "./components/AddTask";
import DeleteAll from "./components/DeleteAll";
import TaskList from "./components/TaskList";

function App() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col p-6">
      <Header />
      <SearchBar />
      <div className="mb-4 flex gap-3">
        <AddTask />
        <DeleteAll />
      </div>
      <TaskList />
    </main>
  );
}

export default App;
