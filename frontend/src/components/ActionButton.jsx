const colorClasses = {
  violet: "border-violet-300 bg-violet-50 text-violet-700 hover:bg-violet-100",
  rose: "border-rose-300 bg-rose-50 text-rose-700 hover:bg-rose-100",
};

function ActionButton({ label, icon: Icon, actionFunction, color = "violet" }) {
  const colorClass = colorClasses[color] ?? colorClasses.violet;

  return (
    <button
      type="button"
      onClick={actionFunction}
      className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium ${colorClass}`}
    >
      <Icon size={14} aria-hidden="true" />
      {label}
    </button>
  );
}

export default ActionButton;
