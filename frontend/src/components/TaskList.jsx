import TaskItem from "./TaskItem";

function TaskList() {
  return (
    <section className="mb-4">
      <h2 className="mb-2 text-xl font-semibold text-slate-800">Task List</h2>
      <ul className="m-0 flex list-none flex-col gap-2 p-0">
        <TaskItem>Task 1</TaskItem>
        <TaskItem>Task 2</TaskItem>
        <TaskItem>Task 3</TaskItem>
      </ul>
    </section>
  );
}

export default TaskList;
