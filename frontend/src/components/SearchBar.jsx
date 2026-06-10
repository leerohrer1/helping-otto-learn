function SearchBar() {
  return (
    <section className="mb-4">
      <input
        type="search"
        placeholder="Search tasks"
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-violet-500"
      />
    </section>
  );
}

export default SearchBar;
